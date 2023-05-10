import {EmailPasswordRecoverForm} from '@components/EmailPasswordRecoverForm'
import {RecoverPasswordForm} from '@components/RecoverPasswordForm'
import {TokenPasswordRecoverForm} from '@components/TokenPasswordRecoverForm'
import {useState} from 'react'

const ForgotPassword = () => {

	const [formToRender, setSelectedForm] = useState(0)

	let form: React.ReactNode = null

	switch (formToRender) {
		case 0:
			form = <EmailPasswordRecoverForm setForm={setSelectedForm} />
			break;
		case 1:
			form = <TokenPasswordRecoverForm setForm={setSelectedForm} />
			break;
		case 2:
			form = <RecoverPasswordForm setForm={setSelectedForm} />
			break;



	}

	return (
		<main className="">
			<div className='h-screen w-screen bg-forgot-password bg-cover fixed inset-0 grayscale'></div>
			{form}
		</main>
	)

}

export default ForgotPassword
