import { Container, Header, User } from './styles'

import { StarsRating } from '@/components/StarsRating'
import { getDateFormattedAndRelative } from '@/utils/timeFormatter'
import Image from 'next/image'
import Link from 'next/link'

interface RatingCardProps {
  avatar: string | null
  name: string
  date: Date
  description: string
  rate: number
  user: string
}

export function RatingCard({
  avatar,
  name,
  date,
  description,
  rate,
  user,
}: RatingCardProps) {
  const { dateFormatted, dateRelativeToNow, dateString } =
    getDateFormattedAndRelative(date)

  return (
    <Container>
      <Header>
        <User>
          <Link href={`/profile/${user}`}>
            <Image
              src={`${avatar}`}
              alt=""
              width="40"
              height="40"
              style={{
                objectFit: 'cover',
              }}
            />
          </Link>
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
