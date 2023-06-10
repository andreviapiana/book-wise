import {
  ButtonsContainer,
  ActionButton,
  Container,
  Header,
  ReviewForm,
  User,
  CharacterCounter,
  ReviewFormContainer,
  FormErrors,
  Loading,
} from './styles'
import { Check, Star, X, CircleNotch } from 'phosphor-react'

import Image from 'next/image'
import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import { useSession } from 'next-auth/react'
import avatarPlaceholder from '../../../../../public/avatar.png'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'
import { toast } from 'react-toastify'

const createRatingSchema = z.object({
  rate: z
    .number()
    .positive({ message: 'Por favor, selecione uma nota de 1 a 5' })
    .max(5),
  description: z
    .string()
    .min(3, { message: 'Por favor, adicione uma descrição a sua avaliação' }),
})

type CreateRatingFormData = z.infer<typeof createRatingSchema>

interface ReviewFormCardProps {
  onClose: () => void
  closeLateralMenu: () => void
  bookId: string
  userId: string | number | undefined
}

export function ReviewFormCard({
  onClose,
  bookId,
  userId,
  closeLateralMenu,
}: ReviewFormCardProps) {
  const session = useSession()

  // Seletor de Rating
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)
    setValue('rate', rate)
  }

  // Formulário
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<CreateRatingFormData>({
    resolver: zodResolver(createRatingSchema),
    defaultValues: {
      rate: rating,
    },
  })

  // Contagem de Caracteres
  const descriptionCount = watch('description')?.split('').length || 0

  // Envio do Formulário
  async function handleCreateRating(data: CreateRatingFormData) {
    await api.post(`/ratings/${bookId}`, {
      rate: data.rate,
      description: data.description,
      userId,
      bookId,
    })
    closeLateralMenu()
    toast.success('Avaliação feita com sucesso!')
  }

  return (
    <Container onSubmit={handleSubmit(handleCreateRating)}>
      {isSubmitting && (
        <Loading>
          <CircleNotch className="loading" size={52} />
        </Loading>
      )}
      <Header>
        <User>
          <Image
            src={session.data?.user.avatar_url || avatarPlaceholder}
            alt=""
            width="40"
            height="40"
            style={{
              objectFit: 'cover',
            }}
          />
          <div>
            <h5>{session.data?.user.name}</h5>
          </div>
        </User>

        <Rating
          onClick={handleRating}
          emptyIcon={<Star size={28} />}
          fillIcon={<Star weight="fill" size={28} />}
          emptyColor="#8381D9"
          fillColor="#8381D9"
        />
      </Header>

      <ReviewFormContainer>
        <ReviewForm
          placeholder="Escreva sua avaliação"
          maxLength={450}
          {...register('description')}
        />

        <CharacterCounter>{descriptionCount}/450</CharacterCounter>
      </ReviewFormContainer>

      <ButtonsContainer>
        {(errors.rate || errors.description) && (
          <FormErrors>
            <span>{errors.rate && errors.rate.message}</span>
            <span>{errors.description && errors.description.message}</span>
          </FormErrors>
        )}
        <>
          <ActionButton title="Enviar avaliação" type="submit">
            <Check size={24} color="#8381D9" />
          </ActionButton>
          <ActionButton
            title="Fechar formulário de avaliação"
            type="button"
            onClick={onClose}
          >
            <X size={24} color="#50B2C0" />
          </ActionButton>
        </>
      </ButtonsContainer>
    </Container>
  )
}
