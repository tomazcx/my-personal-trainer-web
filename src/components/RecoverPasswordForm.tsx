import {Button} from '@components/Button'
import {Input} from '@components/Input'
import {LockSimple} from 'phosphor-react'
import {useForm} from 'react-hook-form'

type RecoverPasswordForm = {
	setForm(value: number): void
}

export const RecoverPasswordForm: React.FC<RecoverPasswordForm> = ({setForm}) => {

	const {register, handleSubmit} = useForm()

	return (
		<form action="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-default p-4 rounded-lg w-10/12 max-w-[600px] flex flex-col gap-4">
			<h1 className="text-white text-2xl font-semibold">Crie uma nova senha para a sua conta.</h1>
			<h2 className="text-gray-hard">Informe a nova senha desejada e a sua confirmação para conseguir acessar a sua conta.</h2>
			<Input register={register} name="password" placeholder='Insira a senha'> <LockSimple className='text-gray-hard' size={24} />  </Input>
			<Input register={register} name="confirm_password" placeholder='Insira a confirmação de senha'> <LockSimple className='text-gray-hard' size={24} />  </Input>
			<Button onClick={() => setForm(2)}>Confirmar</Button>
		</form>

	)

}
