import { ButtonFilter } from '@/components/ButtonFilter'
import PopularCard from '@/components/PopularCard'
import { SearchInput } from '@/components/SearchInput'
import { ChartLineUp, MagnifyingGlass } from 'phosphor-react'
import React, { useState } from 'react'
import Template from '../template'
import {
  Title,
  CenterContainer,
  FilterContainer,
  CardsContainer,
} from './styles'

export default function Explore() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  // Buscar a Categoria no Banco de Dados mais além e então apagar isso aqui abaixo //
  const categorySelectorTypes = {
    todos: {
      label: 'Todos',
    },
    computacao: {
      label: 'Computação',
    },
    educacao: {
      label: 'Educação',
    },
    fantasia: {
      label: 'Fantasia',
    },
    ficcao: {
      label: 'Ficção científica',
    },
    horror: {
      label: 'Horror',
    },
    hqs: {
      label: 'HQs',
    },
    suspense: {
      label: 'Suspense',
    },
  }

  return (
    <Template>
      <Title>
        <ChartLineUp size={32} />
        <h2>Explorar</h2>
        <SearchInput placeholder="Buscar livro ou autor">
          <MagnifyingGlass size={20} />
        </SearchInput>
      </Title>

      <CenterContainer>
        <FilterContainer>
          {Object.entries(categorySelectorTypes).map(([key, { label }]) => (
            <ButtonFilter
              key={label}
              id={key}
              title={label}
              value={key}
              selected={activeFilter === label}
              onClick={(e: React.MouseEvent) => {
                const el = e.target as HTMLElement
                el.textContent?.toLowerCase() !== activeFilter
                  ? setActiveFilter(label)
                  : setActiveFilter('')
              }}
            />
          ))}
        </FilterContainer>
        <CardsContainer>
          <PopularCard isFinished />
          <PopularCard />
          <PopularCard isFinished />
          <PopularCard />
          <PopularCard isFinished />
          <PopularCard />
          <PopularCard isFinished />
          <PopularCard isFinished />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
          <PopularCard />
        </CardsContainer>
      </CenterContainer>
    </Template>
  )
}
