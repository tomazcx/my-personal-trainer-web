import Image from 'next/image'
import Link from 'next/link'
import {Input} from '@components/Input'
import {Button} from '@components/Button'
import Template from '../../public/bg-sign-up.jpg'
import Logo from '../../public/logo.png'
import {ArrowLeft, EnvelopeSimple, LockSimple, User} from 'phosphor-react'
import {SelectCategory} from '@components/SelectCategory'

export const SignUp = () => {
	return (
		<main className="grid-cols-12 grid h-screen">

			<section className="col-span-5 h-full flex flex-col items-center gap-16 justify-center">

				<Image src={Logo} alt="Logo image" width={220} />

				<form action="" className='flex flex-col gap-4'>
					<h1 className='text-center text-white text-3xl mb-6 font-bold'>Registre-se gratuitamente</h1>
					<Input type="text" placeholder='Nome'><User className='text-gray-hard' size={24} /></Input>
					<Input type={"email"} placeholder='E-mail'><EnvelopeSimple className='text-gray-hard' size={24} /></Input>
					<Input type={"password"} placeholder='Senha'><LockSimple className='text-gray-hard' size={24} /></Input>
					<SelectCategory />
					<Button>Entrar</Button>
				</form>

				<Link href={'/'} className='text-white hover:text-gray-lighter transition-colors cursor-pointer flex gap-2 '> <ArrowLeft size={24} /> Voltar para o login</Link>
			</section>
			<Image src={Template} alt="template-image" className="col-span-7 bg-blue-600 h-full object-cover grayscale" />

		</main>

	)
}

export default SignUp
