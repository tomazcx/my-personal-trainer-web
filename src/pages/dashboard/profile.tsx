import {ArrowLeft, IdentificationCard, SignOut, User} from "phosphor-react"
import Dog from '@public/dog.jpg'
import Image from 'next/image'
import {AsideButton} from "@components/AsideButton"
import {useState} from "react"
import {FormInfo} from "@components/FormInfo"
import {FormExhibition} from "@components/FormExhibition"
import {SignOutAlert} from "@components/SignOutAlert"
import Link from 'next/link'
const Profile = () => {

	const [formSelected, setFormSelected] = useState(0)

	return (
		<>
			<header className="bg-gray-dark p-8 px-24">
				<Link href="/dashboard" className="flex gap-4 items-center text-white">
					<ArrowLeft className="text-white" size={24} />
					<span>Retornar</span>
				</Link>
			</header>
			<main className="grid grid-cols-12">
				<aside className="col-span-2 flex flex-col relative bg-gray-light h-screen items-center pt-8">
					<Image src={Dog} alt="User profile picture" className="rounded-full mb-8" width={200} />
					<AsideButton
						formControl={{
							formToSelect: 0,
							selectedForm: formSelected,
							setForm: setFormSelected
						}}
						text="Informações pessoais"><User size={24} /></AsideButton>
					<AsideButton
						formControl={{
							formToSelect: 1,
							selectedForm: formSelected,
							setForm: setFormSelected
						}}
						text="Informações de exibição"><IdentificationCard size={24} /></AsideButton>
					<SignOutAlert>
						<AsideButton text="Sair"><SignOut size={24} /></AsideButton>
					</SignOutAlert>
				</aside>

				<section className="col-span-10 flex flex-col items-center justify-center">
					{formSelected === 0 ? <FormInfo /> : <FormExhibition />}
				</section>

			</main>
		</>
	)
}

export default Profile
