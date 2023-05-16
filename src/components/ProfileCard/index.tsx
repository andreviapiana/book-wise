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
import bookImg from '../../../public/images/books/o-hobbit.png'

export default function ProfileCard() {
  const isFinished = true
  return (
    <Container>
      <time>há X dias</time>
      <CardWrapper>
        <CardInfos>
          <Image
            width={108}
            height={152}
            src={bookImg}
            alt=""
            style={{ borderRadius: '4px' }}
          />

          <InfosWrapper>
            {isFinished && (
              <ReadNotice>
                <p>LIDO</p>
              </ReadNotice>
            )}

            <Infos>
              <strong>A revolução dos Bichos</strong>
              <span>George Orwell</span>
            </Infos>

            <StarsRating rating={3} />
          </InfosWrapper>
        </CardInfos>
        <Description>Nec tempor nunc in egestas. </Description>
      </CardWrapper>
    </Container>
  )
}
