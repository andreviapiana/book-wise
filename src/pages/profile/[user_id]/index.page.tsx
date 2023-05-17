import { SearchInput } from '@/components/SearchInput'
import {
  User,
  MagnifyingGlass,
  Books,
  UserList,
  BookmarkSimple,
  BookOpen,
} from 'phosphor-react'
import Template from '../../template'
import {
  Title,
  CenterContainer,
  CardWrapper,
  ImageWrapper,
  RightContainer,
  MainContainer,
  Line,
  UserNumber,
  UserStats,
  CardsContainer,
} from './styles'
import Image from 'next/image'

import { prisma } from '@/lib/prisma'
import {
  Book,
  CategoriesOnBooks,
  Category,
  Rating,
  User as UserPrisma,
} from '@prisma/client'
import { GetServerSideProps } from 'next'
import { useState } from 'react'
import ProfileCard from '@/components/ProfileCard'

interface ProfileProps {
  infos: {
    pages: number
    booksCount: number
    authorsCount: number
    bestGenre: Category
  }
  user: UserPrisma & {
    ratings: (Rating & {
      book: Book & {
        categories: (CategoriesOnBooks & {
          category: Category
        })[]
      }
    })[]
  }
  ratings: (Rating & {
    book: Book & {
      categories: (CategoriesOnBooks & {
        category: Category
      })[]
    }
  })[]
}

export default function Profile({ infos, ratings, user }: ProfileProps) {
  return (
    <Template>
      <Title>
        <User size={32} />
        <h2>Perfil</h2>
      </Title>

      <MainContainer>
        <CenterContainer>
          <SearchInput placeholder="Buscar livro ou autor" size={'md'}>
            <MagnifyingGlass size={20} />
          </SearchInput>

          <CardsContainer>
            <CardWrapper>
              {ratings.map((rating) => (
                <ProfileCard
                  key={rating.id}
                  book={rating.book}
                  rating={rating}
                />
              ))}
            </CardWrapper>
          </CardsContainer>
        </CenterContainer>

        <RightContainer>
          <ImageWrapper>
            <Image
              width={70}
              height={70}
              src={user.avatar_url}
              alt=""
              style={{
                objectFit: 'cover',
                overflow: 'hidden',
                borderRadius: 9999,
              }}
            />
          </ImageWrapper>
          <p>{user.name}</p>
          <span>{`membro desde ${user.created_at}`}</span>
          <Line />
          <UserStats>
            <UserNumber>
              <BookOpen size={32} />
              <div>
                <h5>{infos.pages}</h5>
                <span>Páginas lidas </span>
              </div>
            </UserNumber>
            <UserNumber>
              <Books size={32} />
              <div>
                <h5>{infos.booksCount}</h5>
                <span>Livros avaliados </span>
              </div>
            </UserNumber>
            <UserNumber>
              <UserList size={32} />
              <div>
                <h5>{infos.authorsCount}</h5>
                <span>Autores lidos </span>
              </div>
            </UserNumber>
            <UserNumber>
              <BookmarkSimple size={32} />
              <div>
                <h5>{infos.bestGenre.name}</h5>
                <span>Categoria mais lida </span>
              </div>
            </UserNumber>
          </UserStats>
        </RightContainer>
      </MainContainer>
    </Template>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const userId = String(params?.user_id)

  try {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id: userId,
      },
      include: {
        ratings: {
          include: {
            book: {
              include: {
                categories: {
                  include: {
                    category: true,
                  },
                },
              },
            },
          },
        },
      },
    })

    const pages = user.ratings.reduce((acc, rating) => {
      return (acc += rating.book.total_pages)
    }, 0)

    const books = user.ratings.map((rating) => rating.book)

    const authors = user.ratings.map((rating) => rating.book.author)

    const uniqueAuthors = authors.filter(
      (value, index, array) => array.indexOf(value) === index,
    )

    const genres = books
      .map((book) => book.categories.map((category) => category.category))
      .flat()

    const genreNumbers = genres
      .reduce((acc: any, genre) => {
        const qtd = genres.filter((i: any) => i.id === genre.id).length
        return [
          ...acc,
          {
            ...genre,
            qtd,
          },
        ]
      }, [])
      .sort((a: any, b: any) => b.qtd - a.qtd)

    const infos = {
      pages,
      booksCount: books.length,
      authorsCount: uniqueAuthors.length,
      bestGenre: genreNumbers[0],
    }

    return {
      props: {
        ratings: JSON.parse(JSON.stringify(user.ratings)),
        user: JSON.parse(JSON.stringify(user)),
        infos,
      },
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
