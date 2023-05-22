import { ButtonFilter } from '@/components/ButtonFilter'
import PopularCard from '@/components/PopularCard'
import { SearchInput } from '@/components/SearchInput'
import { Book, Category } from '@prisma/client'
import { prisma } from '@/lib/prisma'
import { ChartLineUp, MagnifyingGlass } from 'phosphor-react'
import React, { useState } from 'react'
import Template from '../template'
import {
  Title,
  CenterContainer,
  FilterContainer,
  CardsContainer,
} from './styles'
import { api } from '@/lib/axios'
import { LateralMenu } from '@/components/LateralMenu'

export interface BookWithRatingAndCategories extends Book {
  rating: number
  categories: Category[]
  ratings: any[]
}

export interface ExploreProps {
  categories: Category[]
  books: BookWithRatingAndCategories[]
}

export default function Explore({ categories, books }: ExploreProps) {
  const [booksList, setBooksList] =
    useState<BookWithRatingAndCategories[]>(books)

  const [search, setSearch] = useState('')

  const [categorySelected, setCategorySelected] = useState<string | null>(null)

  async function selectCategory(categoryId: string | null) {
    const query = categoryId ? `?category=${categoryId}` : ''
    const response = await api.get(`/books${query}`)
    if (response.data.booksWithRating) {
      setBooksList(response.data.booksWithRating)
    }
    setCategorySelected(categoryId)
  }

  const filteredBooks = booksList?.filter((book) => {
    return (
      book.name
        .toLowerCase()
        .includes(search.toLowerCase().replace(/( )+/g, ' ')) ||
      book.author
        .toLowerCase()
        .includes(search.toLowerCase().replace(/( )+/g, ' '))
    )
  })

  const [selectedBook, setSelectedBook] =
    useState<BookWithRatingAndCategories | null>(null)
  const sidebarShouldBeOpen = !!selectedBook

  function selectBook(book: BookWithRatingAndCategories) {
    setSelectedBook(book)
  }

  function deselectBook() {
    setSelectedBook(null)
  }

  return (
    <Template>
      {sidebarShouldBeOpen && (
        <LateralMenu handleCloseMenu={deselectBook} book={selectedBook} />
      )}
      <Title>
<div className="title">
  <ChartLineUp size={32} />
  <h2>Explorar</h2>
</div>
        <SearchInput
          placeholder="Buscar livro ou autor"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        >
          <MagnifyingGlass size={20} />
        </SearchInput>
      </Title>

      <CenterContainer>
        <FilterContainer>
          <ButtonFilter
            selected={!categorySelected}
            onClick={() => selectCategory(null)}
          >
            Todos
          </ButtonFilter>

          {categories.map((category) => (
            <ButtonFilter
              key={category.id}
              selected={categorySelected === category.id}
              onClick={() => selectCategory(category.id)}
            >
              {category.name}
            </ButtonFilter>
          ))}
        </FilterContainer>
        <CardsContainer>
          {filteredBooks.map((book) => (
            <PopularCard
              key={book.id}
              size="lg"
              author={book.author}
              name={book.name}
              cover={book.cover_url}
              rating={book.rating}
              onClick={() => selectBook(book)}
            />
          ))}
        </CardsContainer>
      </CenterContainer>
    </Template>
  )
}

export async function getStaticProps() {
  const categories = await prisma.category.findMany()
  const books = await prisma.book.findMany({
    include: {
      ratings: {
        select: {
          rate: true,
        },
      },
      // https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/working-with-many-to-many-relations
      categories: {
        include: {
          category: true,
        },
      },
    },
  })

  const booksFixedRelationWithCategory = books.map((book) => {
    return {
      ...book,
      categories: book.categories.map((category) => category.category),
    }
  })

  const booksWithRating = booksFixedRelationWithCategory.map((book) => {
    const avgRate =
      book.ratings.reduce((sum, rateObj) => {
        return sum + rateObj.rate
      }, 0) / book.ratings.length

    return {
      ...book,
      rating: avgRate,
    }
  })

  return {
    props: {
      // https://stackoverflow.com/a/72837265/6727029
      categories: JSON.parse(JSON.stringify(categories)),
      books: JSON.parse(JSON.stringify(booksWithRating)),
    },
    revalidate: 60 * 60 * 24 * 1, // 1 day
  }
}
