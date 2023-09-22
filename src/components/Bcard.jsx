import { HeartIcon, EyeIcon } from '@heroicons/react/24/solid'

const Bcard = (props) => {
    return (
        <>
            <div className='lg:w-96 w-full h-96 rounded-md bg-cover shadow-md' style={{ backgroundImage: `url(${props.image})` }}>
                <div className='bg-gradient-to-b from-transparent to-gray-800 flex items-end h-full w-full justify-stretch rounded-md opacity-0 hover:opacity-100 transition-all' >
                    <div className='flex items-end justify-evenly p-5 w-full'>
                        <div className='w-3/4 text-white'>
                            <a className='text-xl font-semibold pb-3 hover:underline' href='#'> {props.productName} </a>
                            <p className='text-md'>Redowan Ahmed</p>
                        </div>
                        <div className='flex items-center gap-3 text-white'>
                            <button className='flex items-center gap-1'><HeartIcon className='w-5' /> {props.stock}</button>
                            <button className='flex items-center gap-1'><EyeIcon className='w-5' /> {props.price}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bcard