import { CloseButton, ModalButton, ModalWrapper } from './styles'
import Image from 'next/image'
import { X } from 'phosphor-react'
import google from '@/../public/google.svg'
import github from '@/../public/github.svg'
import { Portal } from '../Portal'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'

interface LoginModalProps {
  onClose: () => void
}

export function LoginModal({ onClose }: LoginModalProps) {
  const router = useRouter()
  const session = useSession()

  async function handleSignInGoogle() {
    await signIn('google')
  }

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/home')
    }
  }, [session, router])

  return (
    <Portal>
      <ModalWrapper>
        <CloseButton
          title="Fechar Tela de Login"
          type="button"
          onClick={onClose}
        >
          <X size={24} />
        </CloseButton>

        <h4>Faça login para deixar sua avaliação</h4>

        <ModalButton onClick={handleSignInGoogle}>
          <Image src={google} height={32} priority alt="Logotipo do Google" />
          Entrar com o Google
        </ModalButton>

        <ModalButton>
          <Image src={github} height={32} priority alt="Logotipo do GitHub" />
          Entrar com o GitHub
        </ModalButton>
      </ModalWrapper>
    </Portal>
  )
}
