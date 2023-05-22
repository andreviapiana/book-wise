import Image from 'next/image'
import {
  Button,
  ButtonsWrapper,
  Container,
  Hero,
  LogoWrapper,
  Preview,
} from './styles'

import loginBackgroundImage from '../../../public/background.svg'
import google from '../../../public/google.svg'
import github from '../../../public/github.svg'
import { RocketLaunch } from 'phosphor-react'
import Link from 'next/link'
import logoImg from '@/../public/logo.svg'

export default function Login() {
  return (
    <Container>
      <Preview>
        <Image
          src={loginBackgroundImage}
          className={'image'}
          quality={100}
          priority
          fill
          alt="Logotipo da aplicação com a imagem de uma mulher deitada no sofá lendo um livro ao fundo"
        />
      </Preview>

      <LogoWrapper>
        <Image
          src={logoImg}
          width={250}
          className={'logoImage'}
          quality={100}
          priority
          alt="Logotipo da aplicação"
        />
      </LogoWrapper>

      <Hero>
        <h2>Boas vindas!</h2>

        <h4>Faça seu login ou acesse como visitante</h4>

        <ButtonsWrapper>
          <Button>
            <Image src={google} height={32} priority alt="Logotipo do Google" />
            Entrar com o Google
          </Button>

          <Button>
            <Image src={github} height={32} priority alt="Logotipo do GitHub" />
            Entrar com o GitHub
          </Button>

          <Link href={'/home'}>
            <Button>
              <RocketLaunch size={32} weight="bold" />
              Acessar como visitante
            </Button>
          </Link>
        </ButtonsWrapper>
      </Hero>
    </Container>
  )
}
