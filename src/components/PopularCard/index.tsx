import { Container, Infos, InfosWrapper, ReadNotice } from './styles'
import Image from 'next/image'
import bookImg from '../../../public/books/Book.png'
import { StarsRating } from '../StarsRating'

interface CardSizeProps {
  size?: 'sm' | 'lg'
  isFinished?: boolean
}

export default function PopularCard({ size, isFinished }: CardSizeProps) {
  return (
    <Container>
      {size === 'sm' ? (
        <Image
          width={64}
          height={94}
          src={bookImg}
          alt=""
          style={{ borderRadius: '4px' }}
        />
      ) : (
        <Image
          width={108}
          height={152}
          src={bookImg}
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
          <strong>A revolução dos bichos</strong>
          <span>George Orwell</span>
        </Infos>

        <StarsRating rating={2} />
      </InfosWrapper>
    </Container>
  )
}
