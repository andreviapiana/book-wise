import {
  NavButton,
  TopContainer,
  NavigationWrapper,
  SidebarContainer,
  LoginButton,
  ImageWrapper,
  InfosWrapper,
} from './styles'
import Image from 'next/image'
import logoImg from '../../../public/logo.svg'
import sidebarBackground from '../../../public/sidebar.svg'
import Link from 'next/link'
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import { useRouter } from 'next/router'
import avatarPlaceholder from '../../../public/avatar.png'
import { LoginModal } from '../LoginModal'
import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'

export default function Sidebar() {
  const session = useSession()
  const router = useRouter()
  const currentRoute = router.pathname

  const [isModalOpen, setIsModalOpen] = useState(false)

  async function openModal() {
    setIsModalOpen(true)
  }

  async function closeModal() {
    setIsModalOpen(false)
  }

  async function handleLogout() {
    signOut({ callbackUrl: '/' })
  }

  return (
    <SidebarContainer>
      {isModalOpen && <LoginModal onClose={closeModal} />}

      <Image
        src={sidebarBackground}
        fill={true}
        alt={''}
        style={{
          objectFit: 'cover',
          overflow: 'hidden',
          borderRadius: 12,
          zIndex: -1,
        }}
      />

      <TopContainer>
        <Link href={'/home'}>
          <Image src={logoImg} alt="" />
        </Link>

        <NavigationWrapper>
          <NavButton href="/home" active={currentRoute === '/home'}>
            <ChartLineUp size={24} /> Início
          </NavButton>

          <NavButton href="/explore" active={currentRoute === '/explore'}>
            <Binoculars size={24} /> Explorar
          </NavButton>

          {session.status === 'authenticated' && (
            <NavButton
              href={`/profile/${session.data.user.id}`}
              active={currentRoute.includes('profile')}
            >
              <User size={24} />
              Perfil
            </NavButton>
          )}
        </NavigationWrapper>
      </TopContainer>

      {session.status === 'authenticated' ? (
        <InfosWrapper>
          <ImageWrapper>
            <Image
              src={session.data.user?.avatar_url || avatarPlaceholder}
              alt=""
              width={32}
              height={32}
            />
          </ImageWrapper>
          <p>{String(session.data.user?.name).split(' ')[0]}</p>
          <LoginButton>
            <SignOut size={20} color="#F75A68" onClick={handleLogout} />
          </LoginButton>
        </InfosWrapper>
      ) : (
        <LoginButton onClick={openModal}>
          <strong>Fazer login</strong>
          <SignIn size={20} weight="fill" color="#50B2C0" />
        </LoginButton>
      )}
    </SidebarContainer>
  )
}
