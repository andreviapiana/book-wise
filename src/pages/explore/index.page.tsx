import Template from '../template'
import {
  Title,
  CenterContainer,
  FilterContainer,
  CardsContainer,
} from './styles'
import { ChartLineUp, MagnifyingGlass } from 'phosphor-react'

import { ButtonFilter } from '@/components/ButtonFilter'
import PopularCard from '@/components/PopularCard'
import { SearchInput } from '@/components/SearchInput'
import { LateralMenu } from '@/components/LateralMenu'

import { prisma } from '@/lib/prisma'
import { Category } from '@prisma/client'
import React, { useState } from 'react'
import { api } from '@/lib/axios'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api'
import { GetServerSideProps } from 'next'

import { BookWithRatingAndCategories } from '../home/index.page'
import { NextSeo } from 'next-seo'

export interface ExploreProps {
  categories: Category[]
  books: BookWithRatingAndCategories[]
}

export default function Explore({ categories, books }: ExploreProps) {
  // Carregamento de todos os Livros
  const [booksList, setBooksList] =
    useState<BookWithRatingAndCategories[]>(books)

  // Filtragem dos livros pela categoria no ButtonFilter
  const [categorySelected, setCategorySelected] = useState<string | null>(null)

  async function selectCategory(categoryId: string | null) {
    const query = categoryId ? `?category=${categoryId}` : ''
    const response = await api.get(`/books${query}`)
    if (response.data.booksWithRating) {
      setBooksList(response.data.booksWithRating)
    }
    setCategorySelected(categoryId)
  }

  // Filtragem pelo nome dos livros/autores no SearchInput
  const [search, setSearch] = useState('')
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

  // Abertura do LateralMenu ao selecionar um livro
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
    <>
      <NextSeo title="Explorar | Book Wise" />
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
                alreadyRead={book.alreadyRead}
              />
            ))}
          </CardsContainer>
        </CenterContainer>
      </Template>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // Capturando as infos da Sessão
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )
  // Buscando as Categorias
  const categories = await prisma.category.findMany()

  // Buscando os Livros com as Notas + Categoria
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

  // Retornando os Livros com a Categoria(para poder filtrar)
  const booksFixedRelationWithCategory = books.map((book) => {
    return {
      ...book,
      categories: book.categories.map((category) => category.category),
    }
  })

  // Verificando se um livro foi lido pelo Usuário logado
  let userBooksIds: string[] = []

  if (session) {
    const userBooks = await prisma.book.findMany({
      where: {
        ratings: {
          some: {
            user_id: String(session?.user?.id),
          },
        },
      },
    })

    userBooksIds = userBooks?.map((x) => x?.id)
  }

  // Retornando os Livros(com a categoria) + Nota Média + Verificação de Leitura
  const booksWithRating = booksFixedRelationWithCategory.map((book) => {
    const avgRate =
      book.ratings.reduce((sum, rateObj) => {
        return sum + rateObj.rate
      }, 0) / book.ratings.length

    return {
      ...book,
      rating: avgRate,
      alreadyRead: userBooksIds.includes(book.id),
    }
  })

  // Retorno final dos Livros(livros|categoria|nota média|verificação de leitura) + Categorias(para os botões de filtragem)
  return {
    props: {
      // https://stackoverflow.com/a/72837265/6727029
      categories: JSON.parse(JSON.stringify(categories)),
      books: JSON.parse(JSON.stringify(booksWithRating)),
    },
  }
}
