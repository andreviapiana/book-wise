import { Container, Infos, InfosWrapper, ReadNotice } from './styles'
import Image from 'next/image'
import { StarsRating } from '../StarsRating'

interface CardSizeProps {
  size?: 'sm' | 'lg'
  cover: string
  name: string
  author: string
  rating: number
  onClick?: (e: any) => void
  alreadyRead: boolean
}

export default function PopularCard({
  size = 'sm',
  cover,
  name,
  author,
  rating,
  alreadyRead,
  ...rest
}: CardSizeProps) {
  return (
    <Container {...rest}>
      {size === 'sm' ? (
        <Image
          width={64}
          height={94}
          src={`/${cover}`}
          alt=""
          style={{ borderRadius: '4px' }}
        />
      ) : (
        <Image
          width={108}
          height={152}
          src={`/${cover}`}
          alt=""
          style={{ borderRadius: '4px' }}
        />
      )}

      <InfosWrapper>
        {alreadyRead && (
          <ReadNotice>
            <p>LIDO</p>
          </ReadNotice>
        )}

        <Infos>
          <strong>{name}</strong>
          <span>{author}</span>
        </Infos>

        <StarsRating rating={rating} />
      </InfosWrapper>
    </Container>
  )
}
