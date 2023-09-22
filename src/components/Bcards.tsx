import { HeartIcon, EyeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Results } from '@/type'

const Bcards = (props: any) => {
    return (
        <>
            {props.data ? (
                props.data.map((value: Results) => (
                    <div key={value.id} className='lg:w-[32.45%] w-full h-96 rounded-md shadow-md '>
                        <div className='flex items-end h-full w-full justify-stretch transition-all relative' >
                        <Image fill quality={20} className={`object-center ${ props.contain ? ( 'object-contain' ) : ('object-cover') } pointer-events-none relative rounded-md `} src={value.image} alt={value.name ? (value.name):('No title available') } sizes="(min-width: 200px) 50vw, 100vw" placeholder='blur' blurDataURL='data:'></Image>
                            <div className='flex items-end justify-evenly p-5 w-full z-20 opacity-0 hover:opacity-100 bg-gradient-to-b from-transparent to-gray-800 h-full rounded-md'>
                                <div className='w-3/4 text-white'>
                                    <a className='text-xl font-semibold pb-3 hover:underline' href='#'> {value.name ? (value.name):('No title available') } </a>
                                    <p className='text-md'>Redowan Ahmed</p>
                                </div>
                                <div className='flex items-center gap-3 text-white'>
                                    <button className='flex items-center gap-1'><HeartIcon className='w-5' /> {value.inventory ? (value.inventory): ('0')}</button>
                                    <button className='flex items-center gap-1'><EyeIcon className='w-5' /> {value.price ? (value.price):('0')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-xl font-bold">No Images available !! </div>
            )}

        </>
    )
}

export default Bcards