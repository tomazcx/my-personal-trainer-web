export const SelectCategory: React.FC = () => {
	return (
		<select className="bg-gray-dark rounded-xl p-4 text-white placeholder:text-gray-hard">
			<option value={''}>Escolha a categoria</option>
			<option value={'1'}>Musculação</option>
			<option value={'2'}>Calistenia</option>
		</select>
	)
}
