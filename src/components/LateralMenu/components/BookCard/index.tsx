import {
  BookContainer,
  BookNumber,
  Container,
  Footer,
  Info,
  Number,
} from './styles'
import { BookmarkSimple, BookOpen } from 'phosphor-react'

import { StarsRating } from '@/components/StarsRating'
import Image from 'next/image'

import { BookWithRatingAndCategories } from '@/pages/home/index.page'

interface BookCardProps {
  book: BookWithRatingAndCategories
}

export function BookCard({ book }: BookCardProps) {
  let numberOfReviews: string
  if (book.ratings.length === 1) {
    numberOfReviews = 'avaliação'
  } else {
    numberOfReviews = 'avaliações'
  }

  return (
    <Container>
      <BookContainer>
        <Image src={`/${book.cover_url}`} alt="" width="171" height="242" />
        <Info>
          <div>
            <h3>{book.name}</h3>
            <h4>{book.author}</h4>
          </div>
          <div>
            <StarsRating rating={book.rating} />
            <Number>
              {book.ratings.length} {numberOfReviews}
            </Number>
          </div>
        </Info>
      </BookContainer>
      <Footer>
        <BookNumber>
          <BookmarkSimple size={32} />
          <div>
            <h5>Categoria</h5>
            {book.categories?.map((category, index) => (
              <span key={category.id}>
                {(index ? ', ' : '') + category.name}
              </span>
            ))}
          </div>
        </BookNumber>
        <BookNumber>
          <BookOpen size={32} />
          <div>
            <h5>Páginas</h5>
            <span>{book.total_pages}</span>
          </div>
        </BookNumber>
      </Footer>
    </Container>
  )
}
