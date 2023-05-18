import { StarsRating } from '@/components/StarsRating'
import { getDateFormattedAndRelative } from '@/utils/timeFormatter'
import Image from 'next/image'
import { Container, Header, User } from './styles'

interface RatingCardProps {
  avatar: string | null
  name: string
  date: Date
  description: string
  rate: number
  rating: any
}

export function RatingCard({
  avatar,
  name,
  date,
  description,
  rate,
  rating,
}: RatingCardProps) {
  const { dateFormatted, dateRelativeToNow, dateString } =
    getDateFormattedAndRelative(date)

  return (
    <Container>
      <Header>
        <User>
          <Image
            src={avatar}
            alt=""
            width="40"
            height="40"
            style={{
              objectFit: 'cover',
            }}
          />
          <div>
            <h5>{name}</h5>
            <time title={dateFormatted} dateTime={dateString}>
              {dateRelativeToNow}
            </time>
          </div>
        </User>
        <StarsRating rating={rate} />
      </Header>
      <p>{description}</p>
    </Container>
  )
}
