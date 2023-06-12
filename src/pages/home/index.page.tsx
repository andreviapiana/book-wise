import Template from '../template'
import {
  Title,
  CenterContainer,
  HomeContainer,
  Subtitle,
  RightContainer,
} from './styles'
import { CaretRight, ChartLineUp } from 'phosphor-react'

import RecentReadCard from '@/components/RecentReadCard'
import ReviewCard from '@/components/ReviewCard'
import PopularCard from '@/components/PopularCard'
import EmptyCard from '@/components/EmptyCard'

import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { Book, Category, Rating, User } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api'
import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'

export interface BookWithRatingAndCategories extends Book {
  categories: Category[]
  rating: number
  alreadyRead: boolean
  ratings: Rating[]
}

export interface RatingWithUserAndBook extends Rating {
  user: User
  book: Book
  alreadyRead: boolean
}

interface HomeProps {
  ratings: RatingWithUserAndBook[]
  books: BookWithRatingAndCategories[]
  userLastRating: RatingWithUserAndBook
}

export default function Home({ ratings, books, userLastRating }: HomeProps) {
  const session = useSession()
  return (
    <>
      <NextSeo title="Início | Book Wise" />

      <Template>
        <Title>
          <ChartLineUp size={32} />
          <h2>Início</h2>
        </Title>

        <HomeContainer>
          <CenterContainer>
            {session.data?.user && (
              <>
                {userLastRating ? (
                  <>
                    <Subtitle>
                      <span>Sua última leitura</span>
                      <Link href={`/profile/${session.data.user.id}`}>
                        Ver todas
                        <CaretRight size={16} />
                      </Link>
                    </Subtitle>
                    <RecentReadCard
                      key={userLastRating.id}
                      rating={userLastRating}
                      book={userLastRating.book}
                    />
                  </>
                ) : (
                  <>
                    <Subtitle>
                      <span>Sua última leitura</span>
                    </Subtitle>
                    <EmptyCard />
                  </>
                )}
              </>
            )}

            <Subtitle>
              <span>Avaliações mais recentes</span>
            </Subtitle>

            {ratings.map((rating) => (
              <ReviewCard key={rating.id} rating={rating} />
            ))}
          </CenterContainer>

          <RightContainer>
            <Subtitle>
              <span>Livros Populares</span>
              <Link href={'/explore'}>
                Ver todos
                <CaretRight size={16} />
              </Link>
            </Subtitle>
            {books.map((book) => (
              <PopularCard
                key={book.id}
                size="sm"
                author={book.author}
                name={book.name}
                cover={book.cover_url}
                rating={book.rating}
                alreadyRead={book.alreadyRead}
              />
            ))}
          </RightContainer>
        </HomeContainer>
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

  // Buscando a última avaliação do usuário, caso exista
  let userLastRating = null

  if (session?.user) {
    userLastRating = await prisma.rating.findFirst({
      where: {
        user_id: String(session?.user?.id),
      },
      include: {
        user: true,
        book: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    })
  }

  // Buscando e filtrando os 4 livros mais populares
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

    take: 4,
    orderBy: {
      ratings: {
        _count: 'desc',
      },
    },
  })

  // Retornando os livros com a Categoria
  const booksWithCategory = books.map((book) => {
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
  const booksWithRating = booksWithCategory.map((book) => {
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

  // Buscando as 4 avaliações mais recentes(excluindo a avaliação mais recente do usuário)
  const ratings = await prisma.rating.findMany({
    where: {
      NOT: {
        id: userLastRating?.id,
      },
    },
    include: {
      user: true,
      book: true,
    },
    take: 4,
    orderBy: {
      created_at: 'desc',
    },
  })

  // Incluindo a Verificação de Leitura nas 4 avaliações mais recentes
  const ratingWithReadStatus = ratings.map((rating) => {
    return {
      ...rating,
      alreadyRead: userBooksIds.includes(rating.book.id),
    }
  })

  // Retorno final dos Livros(livros|categoria|nota média|verificação de leitura) + Últimas 4 Avaliações(com verificação de leitura) + Última avaliação do Usuário
  return {
    props: {
      // https://stackoverflow.com/a/72837265/6727029
      books: JSON.parse(JSON.stringify(booksWithRating)),
      ratings: JSON.parse(JSON.stringify(ratingWithReadStatus)),
      userLastRating: JSON.parse(JSON.stringify(userLastRating)),
    },
  }
}
