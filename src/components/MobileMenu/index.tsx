import {
  Container,
  ImageWrapper,
  LoginButton,
  NavButton,
  NavigationWrapper,
  MobileMenuWrapper,
  HamburgerWrapper,
} from './styles'
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '../../../public/logo.svg'
import userImg from '../../../public/avatar.png'

export function MobileMenu() {
  const [isOpen, setOpen] = useState(false)

  const session = 'authenticated'

  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <Container>
      <MobileMenuWrapper>
        <HamburgerWrapper>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </HamburgerWrapper>

        <div>
          <Link href={'/home'}>
            <Image src={logoImg} alt="" className="logo" />
          </Link>
        </div>

        {isOpen && (
          <NavigationWrapper>
            <div>
              <NavButton href="/home" active={currentRoute === '/home'}>
                <ChartLineUp size={24} /> Início
              </NavButton>

              <NavButton href="/explore" active={currentRoute === '/explore'}>
                <Binoculars size={24} /> Explorar
              </NavButton>

              {session === 'authenticated' && (
                <NavButton
                  href={`/profile/`}
                  active={currentRoute.includes('profile')}
                >
                  <User size={24} />
                  Perfil
                </NavButton>
              )}
            </div>

            {session === 'authenticated' ? (
              <LoginButton href={'/'}>
                <ImageWrapper>
                  <Image src={userImg} alt="" width={32} height={32} />
                </ImageWrapper>
                André
                <SignOut size={20} color="#F75A68" />
              </LoginButton>
            ) : (
              <LoginButton href={'/'}>
                <strong>Fazer login</strong>
                <SignIn size={20} weight="fill" color="#50B2C0" />
              </LoginButton>
            )}
          </NavigationWrapper>
        )}
      </MobileMenuWrapper>
    </Container>
  )
}
