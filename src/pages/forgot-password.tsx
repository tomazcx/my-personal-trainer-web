import {EmailPasswordRecoverForm} from '@components/EmailPasswordRecoverForm'
import {TokenPasswordRecoverForm} from '@components/TokenPasswordRecoverForm'
import {useState} from 'react'

const ForgotPassword = () => {

	const [formToRender, setSelectedForm] = useState(1)

	return (
		<main className="">
			<div className='h-screen w-screen bg-forgot-password bg-cover fixed inset-0 grayscale'></div>
			{formToRender === 0 ? <EmailPasswordRecoverForm setForm={setSelectedForm} /> : <TokenPasswordRecoverForm setForm={setSelectedForm} />}
		</main>
	)

}

export default ForgotPassword
