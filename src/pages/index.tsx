import Logo from '@public/logo.png'
import Template from '@public/bg-login.jpg'
import Image from 'next/image'
import {Input} from '@components/Input'
import {EnvelopeSimple, LockSimple, SignOut} from 'phosphor-react'
import {Button} from '@components/Button'
import Link from 'next/link'

export const SignIn = () => {
	return (
		<main className="grid-cols-12 grid h-screen">
			<Image src={Template} alt="template-image" className="col-span-7 bg-blue-600 h-full object-cover grayscale" />

			<section className="col-span-5 h-full flex flex-col items-center gap-16 justify-center">

				<Image src={Logo} alt="Logo image" width={220} />

				<form action="" className='flex flex-col gap-4'>
					<h1 className='text-center text-white text-3xl mb-6 font-bold'>Faça seu Login</h1>
					<Input type={"email"} placeholder='E-mail'><EnvelopeSimple className='text-gray-hard' size={24} /></Input>
					<Input type="password" placeholder='Senha'><LockSimple className='text-gray-hard' size={24} /></Input>
					<Button>Entrar</Button>
					<Link href={'/forgot-password'} className="text-center underline text-white hover:text-gray-lighter transition-colors">Esqueci minha senha</Link>
				</form>

				<Link href={'/sign-up'} className='text-red-light hover:text-red-default transition-colors cursor-pointer flex gap-2 underline hover'> <SignOut size={24} /> Criar minha conta</Link>
			</section>
		</main>
	)
}

export default SignIn

