import {
  CardInfos,
  CardWrapper,
  Container,
  Description,
  Infos,
  InfosWrapper,
  ReadNotice,
} from './styles'
import Image from 'next/image'
import { StarsRating } from '../StarsRating'
import { Book } from '@prisma/client'
import { getDateFormattedAndRelative } from '@/utils/timeFormatter'
import { RatingWithUserAndBook } from '@/pages/home/index.page'

interface ProfileCardProps {
  book: Book
  rating: RatingWithUserAndBook
}

export default function PopularCard({ book, rating }: ProfileCardProps) {
  const { dateFormatted, dateRelativeToNow, dateString } =
    getDateFormattedAndRelative(rating.created_at)

  return (
    <Container>
      <time title={dateFormatted} dateTime={dateString}>
        {dateRelativeToNow}
      </time>
      <CardWrapper>
        <CardInfos>
          <Image
            width={108}
            height={152}
            src={`/${book.cover_url}`}
            alt=""
            style={{ borderRadius: '4px' }}
          />

          <InfosWrapper>
            {rating.alreadyRead && (
              <ReadNotice>
                <p>LIDO</p>
              </ReadNotice>
            )}

            <Infos>
              <strong>{book.name}</strong>
              <span>{book.author}</span>
            </Infos>

            <StarsRating rating={rating.rate} />
          </InfosWrapper>
        </CardInfos>
        <Description>{rating.description}</Description>
      </CardWrapper>
    </Container>
  )
}
