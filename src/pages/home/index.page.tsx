import RecentReadCard from '@/components/RecentReadCard'
import ReviewCard from '@/components/ReviewCard'
import PopularCard from '@/components/PopularCard'
import Link from 'next/link'
import { CaretRight, ChartLineUp } from 'phosphor-react'
import Template from '../template'
import {
  Title,
  CenterContainer,
  HomeContainer,
  Subtitle,
  RightContainer,
} from './styles'
import { prisma } from '@/lib/prisma'
import { Book, Category, Rating, User } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api'
import { GetServerSideProps } from 'next'

interface BookWithRatingAndCategories extends Book {
  rating: number
  categories: Category[]
}

export interface RatingWithUserAndBook extends Rating {
  user: User
  book: Book
}

interface HomeProps {
  ratings: RatingWithUserAndBook[]
  books: BookWithRatingAndCategories[]
  myLastRating: RatingWithUserAndBook | null
}

export default function Home({ ratings, books, myLastRating }: HomeProps) {
  const session = useSession()
  return (
    <Template>
      <Title>
        <ChartLineUp size={32} />
        <h2>Início</h2>
      </Title>

      <HomeContainer>
        <CenterContainer>
          {session.data?.user && (
            <>
              {myLastRating && (
                <>
                  <Subtitle>
                    <span>Sua última leitura</span>
                    <Link href={`/profile/${session.data.user.id}`}>
                      Ver todas
                      <CaretRight size={16} />
                    </Link>
                  </Subtitle>
                  <RecentReadCard
                    key={myLastRating.id}
                    rating={myLastRating}
                    book={myLastRating.book}
                  />
                </>
              )}
            </>
          )}

          <Subtitle>
            <span>Avaliações mais recentes</span>
          </Subtitle>

          {ratings.map((rating) => (
            <ReviewCard
              key={rating.id}
              book={rating.book}
              user={rating.user}
              rating={rating}
            />
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
            />
          ))}
        </RightContainer>
      </HomeContainer>
    </Template>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  let myLastRating = null

  if (session?.user) {
    myLastRating = await prisma.rating.findFirst({
      where: {
        user_id: session.user.id,
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

  const ratings = await prisma.rating.findMany({
    where: {
      NOT: {
        id: myLastRating?.id,
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

  return {
    props: {
      // https://stackoverflow.com/a/72837265/6727029
      books: JSON.parse(JSON.stringify(booksWithRating)),
      ratings: JSON.parse(JSON.stringify(ratings)),
      myLastRating: JSON.parse(JSON.stringify(myLastRating)),
    },
  }
}
