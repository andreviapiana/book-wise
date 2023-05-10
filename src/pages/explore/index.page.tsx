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

interface BookWithRating extends Book {
  rating: number
}

export interface ExploreProps {
  categories: Category[]
  books: BookWithRating[]
}

export default function Explore({ categories, books }: ExploreProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  return (
    <Template>
      <Title>
        <ChartLineUp size={32} />
        <h2>Explorar</h2>
        <SearchInput placeholder="Buscar livro ou autor">
          <MagnifyingGlass size={20} />
        </SearchInput>
      </Title>

      <CenterContainer>
        <FilterContainer>
          <ButtonFilter
            title={'Todos'}
            selected={activeFilter === null}
            onClick={() => setActiveFilter(null)}
          />

          {categories.map((category) => (
            <ButtonFilter
              key={category.id}
              title={category.name}
              selected={activeFilter === category.id}
              onClick={() => setActiveFilter(category.id)}
            />
          ))}
        </FilterContainer>
        <CardsContainer>
          {books.map((book) => (
            <PopularCard
              key={book.id}
              size="lg"
              author={book.author}
              name={book.name}
              cover={book.cover_url}
              rating={book.rating}
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
    },
  })

  const booksWithRating = books.map((book) => {
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
