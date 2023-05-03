import {Customer} from "@components/Customer"
import {Header} from "@components/Header"
import {Calendar} from "react-calendar"
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {

	const customersMorning = ['01', '02']
	const customersAfternoon = ['03', '04']

	const renderTileContent = ({date, view}: any) => {
		if (view === 'month') {
			return (
				<div className="text-sm font-medium">
					{date.getDate()}
					<div className="text-red-400 text-xs">
						Some event happening here
					</div>
				</div>
			);
		} else {
			return date.getDate();
		}
	}

	return (
		<>
			<Header />
			<main className="grid grid-cols-12 px-36 mb-24 pt-12">
				<section className="col-span-7 flex flex-col gap-12">
					<div className="flex flex-col gap-4">
						<h1 className="text-white text-3xl">Horários agendados</h1>
						<h2 className="text-red-light">Hoje | Quarta-feira | 05 de Maio</h2>
					</div>

					<div className="flex flex-col gap-8">
						<span className="text-gray-hard text-xl">Atendimento a seguir</span>
						<Customer nextCustomer />
						<div className="flex flex-col gap-2">
							<span className="text-gray-hard">Manhã</span>
							<hr className="border-gray-hard mb-4" />
							<div className="col-span-10 flex flex-col gap-4">
								{customersMorning.map(customer => <Customer key={customer} />)}
							</div>

						</div>

						<div className="flex flex-col gap-2">
							<span className="text-gray-hard">Tarde</span>
							<hr className="border-gray-hard mb-4" />
							<div className="col-span-10 flex flex-col gap-4">
								{customersAfternoon.map(customer => <Customer key={customer} />)}
							</div>

						</div>

					</div>
				</section>
				<section className="col-span-5 ">
					<Calendar tileClassName={renderTileContent} className={'bg-gray-light mx-auto text-gray-hard rounded-lg'} />
				</section>

			</main>
		</>
	)
}

export default Dashboard
