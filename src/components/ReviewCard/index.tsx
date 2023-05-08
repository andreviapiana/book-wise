import {
  CardHeader,
  Container,
  ImageWrapper,
  Infos,
  InfosWrapper,
} from './styles'
import Image from 'next/image'
import bookImg from '../../../public/books/o-hobbit.png'
import userImg from '../../../public/avatar.png'
import { StarsRating } from '../StarsRating'

export default function ReviewCard() {
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
          <>Jaxson Dias</>
          <span>Hoje</span>
        </Infos>

        <StarsRating />
      </CardHeader>

      <InfosWrapper>
        <Image width={108} height={152} src={bookImg} alt="" />
        <Infos>
          <strong>O Hobbit</strong>
          <span>J.R.R. Tolkien</span>
          <p>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh...
          </p>
        </Infos>
      </InfosWrapper>
    </Container>
  )
}
