import { CardInfos, CardHeader, Container, Infos } from './styles'
import Image from 'next/image'
import { StarsRating } from '../StarsRating'
import { Book, Rating } from '@prisma/client'
import { getDateFormattedAndRelative } from '@/utils/timeFormatter'

interface RecentReadCardProps {
  book: Book
  rating: Rating
}

export default function RecentReadCard({ book, rating }: RecentReadCardProps) {
  const { dateFormatted, dateRelativeToNow, dateString } =
    getDateFormattedAndRelative(rating.created_at)
  return (
    <Container>
      <Image
        width={108}
        height={152}
        src={`/${book.cover_url}`}
        alt=""
        style={{ borderRadius: '4px' }}
      />

      <CardInfos>
        <CardHeader>
          <Infos>
            <time title={dateFormatted} dateTime={dateString}>
              {dateRelativeToNow}
            </time>
          </Infos>
          <StarsRating rating={rating.rate} />
        </CardHeader>

        <Infos>
          <strong>{book.name}</strong>
          <span>{book.author}</span>
          <p>{rating.description}</p>
        </Infos>
      </CardInfos>
    </Container>
  )
}
