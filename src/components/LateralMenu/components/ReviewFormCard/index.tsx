import Image from 'next/image'
import { Check, X } from 'phosphor-react'
import {
  ButtonsContainer,
  ActionButton,
  Container,
  Header,
  ReviewForm,
  User,
  CharacterCounter,
  ReviewFormContainer,
} from './styles'
import userImg from '@/../public/avatar.png'
import { ChangeEvent, useState } from 'react'

interface ReviewFormCardProps {
  onClose: () => void
}

export function ReviewFormCard({ onClose }: ReviewFormCardProps) {
  const [characterCount, setCharacterCount] = useState(0)

  function changeCharacterCount(event: ChangeEvent<HTMLTextAreaElement>) {
    setCharacterCount(event.target.value.length)
  }

  return (
    <Container>
      <Header>
        <User>
          <Image
            src={userImg}
            alt=""
            width="40"
            height="40"
            style={{
              objectFit: 'cover',
            }}
          />
          <div>
            <h5>André</h5>
          </div>
        </User>
      </Header>

      <ReviewFormContainer>
        <ReviewForm
          placeholder="Escreva sua avaliação"
          maxLength={450}
          onChange={changeCharacterCount}
        />
        <CharacterCounter>{characterCount}/450</CharacterCounter>
      </ReviewFormContainer>

      <ButtonsContainer>
        <ActionButton
          title="Enviar avaliação"
          type="button"
          /* onClick={} */
        >
          <Check size={24} color="#8381D9" />
        </ActionButton>
        <ActionButton
          title="Fechar formulário de avaliação"
          type="button"
          onClick={onClose}
        >
          <X size={24} color="#50B2C0" />
        </ActionButton>
      </ButtonsContainer>
    </Container>
  )
}
