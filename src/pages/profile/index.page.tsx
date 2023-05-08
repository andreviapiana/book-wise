import ReviewCard from '@/components/ReviewCard'
import { SearchInput } from '@/components/SearchInput'
import {
  User,
  MagnifyingGlass,
  Books,
  UserList,
  BookmarkSimple,
  BookOpen,
} from 'phosphor-react'
import Template from '../template'
import {
  Title,
  CenterContainer,
  CardWrapper,
  ImageWrapper,
  RightContainer,
  MainContainer,
  Line,
  UserNumber,
  UserStats,
  CardsContainer,
} from './styles'
import userImg from '../../../public/avatar.png'
import Image from 'next/image'

export default function Profile() {
  const bestGenre = true

  return (
    <Template>
      <Title>
        <User size={32} />
        <h2>Perfil</h2>
      </Title>

      <MainContainer>
        <CenterContainer>
          <SearchInput placeholder="Buscar livro ou autor" size={'md'}>
            <MagnifyingGlass size={20} />
          </SearchInput>

          <CardsContainer>
            <CardWrapper>
              <span>Há 2 dias</span>
              <ReviewCard />
            </CardWrapper>
            <CardWrapper>
              <span>Há 12 dias</span>
              <ReviewCard />
            </CardWrapper>
            <CardWrapper>
              <span>Há 2 meses</span>
              <ReviewCard />
            </CardWrapper>
          </CardsContainer>
        </CenterContainer>

        <RightContainer>
          <ImageWrapper>
            <Image
              width={70}
              height={70}
              src={userImg}
              alt=""
              style={{ borderRadius: '4px' }}
            />
          </ImageWrapper>
          <p>Cristofer Rosser</p>
          <span>membro desde 2019</span>
          <Line />
          <UserStats>
            <UserNumber>
              <BookOpen size={32} />
              <div>
                <h5>3853</h5>
                <span>Páginas lidas </span>
              </div>
            </UserNumber>
            <UserNumber>
              <Books size={32} />
              <div>
                <h5>10</h5>
                <span>Livros avaliados </span>
              </div>
            </UserNumber>
            <UserNumber>
              <UserList size={32} />
              <div>
                <h5>8</h5>
                <span>Autores lidos </span>
              </div>
            </UserNumber>
            {bestGenre && (
              <UserNumber>
                <BookmarkSimple size={32} />
                <div>
                  <h5>Computação</h5>
                  <span>Categoria mais lida </span>
                </div>
              </UserNumber>
            )}
          </UserStats>
        </RightContainer>
      </MainContainer>
    </Template>
  )
}
