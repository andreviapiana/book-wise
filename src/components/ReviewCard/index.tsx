import {
  CardHeader,
  Container,
  ImageWrapper,
  Infos,
  InfosWrapper,
} from './styles'
import Image from 'next/image'
import userImg from '../../../public/avatar.png'
import { StarsRating } from '../StarsRating'
import { getDateFormattedAndRelative } from '@/utils/timeFormatter'

import { Book, Rating, User as UserPrisma } from '@prisma/client'

export interface CardProps {
  user?: UserPrisma
  book: Book
  rating: Rating
}

export default function ReviewCard({ user, book, rating }: CardProps) {
  const { dateFormatted, dateRelativeToNow, dateString } =
    getDateFormattedAndRelative(rating.created_at)

  return (
    <Container>
      <CardHeader>
        <ImageWrapper>
          <Image
            width={40}
            height={40}
            src={userImg}
            alt=""
            style={{ borderRadius: '4px' }}
          />
        </ImageWrapper>

        <Infos>
          <>{user?.name}</>
          <time title={dateFormatted} dateTime={dateString}>
            {dateRelativeToNow}
          </time>
        </Infos>

        <StarsRating rating={rating.rate} />
      </CardHeader>

      <InfosWrapper>
        <Image width={108} height={152} src={`/${book.cover_url}`} alt="" />
        <Infos>
          <strong>{book.name}</strong>
          <span>{book.author}</span>
          <p>{rating.description}</p>
        </Infos>
      </InfosWrapper>
    </Container>
  )
}
