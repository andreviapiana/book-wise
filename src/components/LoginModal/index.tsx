import { CloseButton, ModalButton, ModalWrapper } from './styles'
import Image from 'next/image'
import { X } from 'phosphor-react'
import google from '@/../public/google.svg'
import github from '@/../public/github.svg'
import { Portal } from '../Portal'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

interface LoginModalProps {
  onClose: () => void
}

export function LoginModal({ onClose }: LoginModalProps) {
  const router = useRouter()
  const currentPath = router.asPath

  const callbackUrl = currentPath === '/login' ? '/' : currentPath

  function handleSignIn(provider: string) {
    signIn(provider, { callbackUrl })
  }

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

        <ModalButton onClick={() => handleSignIn('google')}>
          <Image src={google} height={32} priority alt="Logotipo do Google" />
          Entrar com o Google
        </ModalButton>

        <ModalButton onClick={() => handleSignIn('github')}>
          <Image src={github} height={32} priority alt="Logotipo do GitHub" />
          Entrar com o GitHub
        </ModalButton>
      </ModalWrapper>
    </Portal>
  )
}
