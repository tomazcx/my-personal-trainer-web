import {InputHTMLAttributes} from "react"

type Input = {
	children: React.ReactNode
} & InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<Input> = ({children, ...rest}) => {
	return (
		<fieldset className="rounded-xl bg-gray-dark p-4 flex items-center gap-6 w-full text-white">
			{children}
			<input {...rest} className="bg-transparent placeholder:text-gray-hard outline-none flex-1" />
		</fieldset>
	)
}
