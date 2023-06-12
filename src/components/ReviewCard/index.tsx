import {
  CardHeader,
  Container,
  ImageWrapper,
  Infos,
  InfosWrapper,
  ReadNotice,
} from './styles'
import Image from 'next/image'
import { StarsRating } from '../StarsRating'
import { getDateFormattedAndRelative } from '@/utils/timeFormatter'

import { RatingWithUserAndBook } from '@/pages/home/index.page'

interface ReviewCardProps {
  rating: RatingWithUserAndBook
}

export default function ReviewCard({ rating }: ReviewCardProps) {
  const { dateFormatted, dateRelativeToNow, dateString } =
    getDateFormattedAndRelative(rating.created_at)

  return (
    <Container>
      <CardHeader>
        <ImageWrapper href={`/profile/${rating.user.id}`}>
          <Image
            width={40}
            height={40}
            src={`${rating.user.avatar_url}`}
            alt=""
            style={{
              objectFit: 'cover',
              overflow: 'hidden',
              borderRadius: 9999,
            }}
          />
        </ImageWrapper>

        <Infos>
          <>{rating.user.name}</>
          <time title={dateFormatted} dateTime={dateString}>
            {dateRelativeToNow}
          </time>
        </Infos>

        <StarsRating rating={rating.rate} />
      </CardHeader>

      <InfosWrapper>
        {rating.alreadyRead && (
          <ReadNotice>
            <p>LIDO</p>
          </ReadNotice>
        )}
        <Image
          width={108}
          height={152}
          src={`/${rating.book.cover_url}`}
          alt=""
        />
        <Infos>
          <strong>{rating.book.name}</strong>
          <span>{rating.book.author}</span>
          <p>{rating.description}</p>
        </Infos>
      </InfosWrapper>
    </Container>
  )
}
