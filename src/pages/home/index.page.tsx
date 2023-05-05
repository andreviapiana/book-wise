import RecentReadCard from '@/components/RecentReadCard'
import ReviewCard from '@/components/ReviewCard'
import PopularCard from '@/components/PopularCard'
import Link from 'next/link'
import { CaretRight, ChartLineUp } from 'phosphor-react'
import Template from '../template'
import {
  Title,
  CenterContainer,
  HomeContainer,
  Subtitle,
  RightContainer,
} from './styles'

export default function Home() {
  const session = 'authenticated'

  return (
    <Template>
      <Title>
        <ChartLineUp size={32} />
        <h2>Início</h2>
      </Title>

      <HomeContainer>
        <CenterContainer>
          {session === 'authenticated' && (
            <>
              <Subtitle>
                <span>Sua última leitura</span>
                <Link href={'/'}>
                  Ver todos
                  <CaretRight size={16} />
                </Link>
              </Subtitle>
              <RecentReadCard />
            </>
          )}

          <Subtitle>
            <span>Avaliações mais recentes</span>
          </Subtitle>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </CenterContainer>

        <RightContainer>
          <Subtitle>
            <span>Livros Populares</span>
            <Link href={'/'}>
              Ver todos
              <CaretRight size={16} />
            </Link>
          </Subtitle>
          <PopularCard size="sm" />
          <PopularCard size="sm" isFinished />
          <PopularCard size="sm" />
          <PopularCard size="sm" />
        </RightContainer>
      </HomeContainer>
    </Template>
  )
}
