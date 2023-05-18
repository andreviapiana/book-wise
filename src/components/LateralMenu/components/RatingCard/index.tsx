import { StarsRating } from '@/components/StarsRating'
import Image from 'next/image'
import { Container, Header, User } from './styles'
import avatar from '../../../../../public/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png'

export function RatingCard() {
  return (
    <Container>
      <Header>
        <User>
          <Image src={avatar} alt="" width="40" height="40" />
          <div>
            <h5>Brandon Botosh</h5>
            <time>Hoje</time>
          </div>
        </User>
        <StarsRating rating={3} />
      </Header>
      <p>
        Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
        Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
        eget nec vitae sit vulputate eget
      </p>
    </Container>
  )
}
