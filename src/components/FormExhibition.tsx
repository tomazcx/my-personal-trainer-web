import {Input} from './Input'
import {Button} from './Button'
import {Clock} from 'phosphor-react'
import {SelectCategory} from './SelectCategory'

export const FormExhibition: React.FC = () => {
	return (
		<>
			<h1 className="mb-8 text-2xl text-white font-bold text-center">Alterar informações</h1>
			<form action="" className="max-w-[400px] flex flex-col gap-6">
				<textarea id="" name="" cols={30} rows={10} placeholder="Descrição" className="bg-gray-dark rounded-xl placeholder:text-gray-hard p-4 box-border text-white focus:outline-red-default outline-none"></textarea>
				<SelectCategory />
				<Input placeholder='Hora de início' type={'number'}><Clock size={24} className="text-gray-hard" /></Input>
				<Input placeholder='Hora de término' type={'number'}><Clock size={24} className="text-gray-hard" /></Input>
				<Button>Salvar</Button>
			</form>

		</>
	)
}
