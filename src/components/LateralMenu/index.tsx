import {
  CloseButton,
  Container,
  ContainerOverlay,
  LoginButton,
  SideMenu,
  Title,
} from './styles'
import { X } from 'phosphor-react'

import { BookCard } from './components/BookCard'
import { RatingCard } from './components/RatingCard'
import { LoginModal } from '../LoginModal'
import { ReviewFormCard } from './components/ReviewFormCard'

import { useEffect, useState } from 'react'
import { Rating as RatingInfo, User as UserPrisma } from '@prisma/client'
import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'

import { BookWithRatingAndCategories } from '@/pages/home/index.page'

interface BookReviewsSidebarProps {
  handleCloseMenu(): void
  book: BookWithRatingAndCategories
}

interface RatingProps extends RatingInfo {
  user: UserPrisma
}

export function LateralMenu({
  handleCloseMenu,
  book,
}: BookReviewsSidebarProps) {
  const session = useSession()

  const [ratings, setRatings] = useState<RatingProps[]>([])

  useEffect(() => {
    async function loadRatings() {
      const response = await api.get(`/books/${book.id}`)
      if (response.data) {
        setRatings(response.data.book.ratings)
      }
    }
    loadRatings()
  }, [book.id])

  const [isModalOpen, setIsModalOpen] = useState(false)

  async function openModal() {
    setIsModalOpen(true)
  }

  async function closeModal() {
    setIsModalOpen(false)
  }

  const [reviewFormIsVisible, setReviewFormIsVisible] = useState(false)

  async function handleChangeReviewFormVisibility() {
    setReviewFormIsVisible((state) => !state)
  }

  return (
    <Container>
      {isModalOpen && <LoginModal onClose={closeModal} />}

      <ContainerOverlay onClick={handleCloseMenu} />

      <SideMenu>
        <CloseButton
          title="Fechar menu lateral"
          type="button"
          onClick={handleCloseMenu}
        >
          <X size={24} />
        </CloseButton>
        <BookCard book={book} />

        <Title>
          <span>Avaliações</span>
          <LoginButton
            onClick={
              session.status === 'authenticated'
                ? handleChangeReviewFormVisibility
                : openModal
            }
          >
            <strong>Avaliar</strong>
          </LoginButton>
        </Title>

        {reviewFormIsVisible && (
          <ReviewFormCard
            bookId={book.id}
            userId={session.data?.user.id}
            onClose={handleChangeReviewFormVisibility}
            closeLateralMenu={handleCloseMenu}
          />
        )}

        {ratings?.map((rating) => (
          <RatingCard
            key={rating.id}
            avatar={rating.user.avatar_url}
            name={rating.user.name}
            date={rating.created_at}
            rate={rating.rate}
            description={rating.description}
            user={rating.user_id}
          />
        ))}
      </SideMenu>
    </Container>
  )
}
