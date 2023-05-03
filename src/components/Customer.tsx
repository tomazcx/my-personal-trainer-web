import Dog from '@public/dog.jpg'
import Image from 'next/image'
import {ArrowFatRight, CaretRight, Clock} from 'phosphor-react'

type Customer = {
	nextCustomer?: boolean
}

export const Customer: React.FC<Customer> = ({nextCustomer}) => {
	return (
		<div className='flex items-center gap-4'>
			{nextCustomer ? null : <div className='flex gap-4 items-center'>
				<Clock size={24} className="text-red-light" />
				<span className='text-white'>08:00</span>
			</div>
			}
			<div className='bg-gray-light rounded-xl flex justify-between p-4 relative flex-1'>
				{nextCustomer ? <CaretRight className='text-red-light absolute left-[-18px] h-[50px] top-1/2 -translate-y-1/2' size={24} /> : null
				}
				<div className='flex gap-4 items-center'>
					<Image src={Dog} alt="User image" width={50} className="rounded-full" />
					<span className='text-white text-lg'>João Silva</span>
				</div>

				{nextCustomer ?
					<div className='flex gap-4 items-center'>
						<Clock size={24} className="text-red-light" />
						<span className='text-white'>08:00</span>
					</div>
					: null
				}
			</div>

		</div>
	)
}
