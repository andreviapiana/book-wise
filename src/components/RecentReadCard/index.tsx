import { CardInfos, CardHeader, Container, Infos } from './styles'
import Image from 'next/image'
import bookImg from '../../../public/books/o-hobbit.png'
import { StarsRating } from '../StarsRating'

export default function RecentReadCard() {
  return (
    <Container>
      <Image
        width={108}
        height={152}
        src={bookImg}
        alt=""
        style={{ borderRadius: '4px' }}
      />

      <CardInfos>
        <CardHeader>
          <Infos>
            <span>Há 2 dias</span>
          </Infos>
          <StarsRating rating={1.5} />
        </CardHeader>

        <Infos>
          <strong>Entendendo Algoritmos</strong>
          <span>Aditya Bhargava</span>
          <p>
            Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
            Penatibus id vestibulum imperdiet a at imperdiet lectu...
          </p>
        </Infos>
      </CardInfos>
    </Container>
  )
}
