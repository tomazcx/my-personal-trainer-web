import Image from 'next/image'
import Dog from '@public/dog.jpg'
import Link from 'next/link'

export const ProfileLink: React.FC = () => {
	return (
		<Link href={'/dashboard/profile'} className="flex gap-4 items-center">
			<Image src={Dog} alt="user profile photo" width={60} className="rounded-full" />
			<div className="flex flex-col gap-2">
				<span className="text-gray-hard">Bem vindo,</span>
				<span className="text-red-light">Tomaz Xavier</span>
			</div>
		</Link>
	)
}
