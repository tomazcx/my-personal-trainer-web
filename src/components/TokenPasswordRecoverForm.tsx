import {Button} from '@components/Button'
import {Input} from '@components/Input'
import {Key} from 'phosphor-react'
import {useForm} from 'react-hook-form'

type TokenPasswordRecoverForm = {
	setForm(value: number): void
}


export const TokenPasswordRecoverForm: React.FC<TokenPasswordRecoverForm> = ({setForm}) => {

	const {register, handleSubmit} = useForm()

	return (
		<form action="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-default p-4 rounded-lg w-10/12 max-w-[600px] flex flex-col gap-4">
			<h1 className="text-white text-2xl font-semibold">Insira o token enviado ao seu email</h1>
			<Input register={register} name="email" placeholder='Insira o token'> <Key className='text-gray-hard' size={24} />  </Input>
			<h2 className="text-gray-hard">Não recebeu? clique no botão abaixo para enviar novamente.</h2>
			<span className='text-white underline cursor-pointer hover:text-gray-lighter' onClick={() => setForm(0)}>Enviar novamente</span>
			<Button onClick={() => setForm(2)}>Enviar</Button>
		</form>

	)

}
