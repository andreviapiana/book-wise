import { StarsRating } from '@/components/StarsRating'
import Image from 'next/image'
import { BookmarkSimple, BookOpen } from 'phosphor-react'
import {
  BookContainer,
  BookNumber,
  Container,
  Footer,
  Info,
  Number,
} from './styles'
import bookImg from '../../../../../public/images/books/14-habitos-de-desenvolvedores-altamente-produtivos.png'

export function BookCard() {
  return (
    <Container>
      <BookContainer>
        <Image src={bookImg} alt="" width="171" height="242" />
        <Info>
          <div>
            <h3>14 Hábitos de Desenvolvedores Altamente Produtivos</h3>
            <h4>Zeno Rocha</h4>
          </div>
          <div>
            <StarsRating />
            <Number>3 avaliações</Number>
          </div>
        </Info>
      </BookContainer>
      <Footer>
        <BookNumber>
          <BookmarkSimple size={32} />
          <div>
            <h5>Categoria</h5>
            <span>Computação, Educação</span>
          </div>
        </BookNumber>
        <BookNumber>
          <BookOpen size={32} />
          <div>
            <h5>Páginas</h5>
            <span>160</span>
          </div>
        </BookNumber>
      </Footer>
    </Container>
  )
}
