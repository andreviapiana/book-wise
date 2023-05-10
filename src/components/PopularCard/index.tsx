import { Container, Infos, InfosWrapper, ReadNotice } from './styles'
import Image from 'next/image'
// import bookImg from '../../../public/images/books/Book.png'
import { StarsRating } from '../StarsRating'

interface CardSizeProps {
  size?: 'sm' | 'lg'
  isFinished?: boolean
  cover: string
  name: string
  author: string
  rating: number
}

export default function PopularCard({
  size = 'sm',
  isFinished,
  cover,
  name,
  author,
  rating,
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
        {isFinished && (
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
