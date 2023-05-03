import {Input} from './Input'
import {Button} from './Button'
import {EnvelopeSimple, LockSimple, User} from 'phosphor-react'

export const FormInfo: React.FC = () => {
	return (
		<>
			<h1 className="mb-8 text-2xl text-white font-bold text-center">Alterar informações</h1>
			<form action="" className="max-w-[400px] flex flex-col gap-6">
				<div className="flex flex-col gap-2">
					<Input placeholder="Nome" type={'text'}><User size={24} className="text-gray-hard" /></Input>
					<Input placeholder="Email" type={'email'}><EnvelopeSimple size={24} className="text-gray-hard" /></Input>
				</div>
				<div className="flex flex-col gap-2">
					<Input placeholder="Senha" type={"password"}><LockSimple size={24} className="text-gray-hard" /></Input>
					<Input placeholder="Nova Senha" type={"password"}><LockSimple size={24} className="text-gray-hard" /></Input>
					<Input placeholder="Confirmar Senha" type={"password"}><LockSimple size={24} className="text-gray-hard" /></Input>
				</div>
				<Button>Salvar</Button>
			</form>

		</>
	)
}
