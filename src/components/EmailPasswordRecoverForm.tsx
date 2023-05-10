import {Button} from '@components/Button'
import {Input} from '@components/Input'
import {EnvelopeSimple} from 'phosphor-react'
import {useForm} from 'react-hook-form'

type EmailPasswordRecoverForm = {
	setForm(value: number): void
}

export const EmailPasswordRecoverForm: React.FC<EmailPasswordRecoverForm> = ({setForm}) => {

	const {register, handleSubmit} = useForm()

	return (
		<form action="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-default p-4 rounded-lg w-10/12 max-w-[600px] flex flex-col gap-4">
			<h1 className="text-white text-2xl font-semibold">Insira seu email</h1>
			<h2 className="text-gray-hard">Caso você possua uma conta com o email informado, você recebera em sua caixa postal um token para recuperar sua senha.</h2>
			<Input register={register} name="email" placeholder='Insira seu email'> <EnvelopeSimple className='text-gray-hard' size={24} />  </Input>
			<Button onClick={() => setForm(1)}>Enviar</Button>
		</form>

	)

}
