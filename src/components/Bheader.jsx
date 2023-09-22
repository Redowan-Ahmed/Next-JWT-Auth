'use client';
import Link from 'next/link'
import { BellIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useState, useEffect } from 'react'



const Bheader = () => {
    const [header, setHeader] = useState("header")

    const listenScrollEvent = (event) => {
        if (window.scrollY < 73) {
            return setHeader("header")
        } else if (window.scrollY > 70) {
            return setHeader("bg-black")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);
    return (
        <>
            <header className={`flex gap-5 items-center justify-between py-2 px-7 shadow-md fixed w-full z-50 transition-all duration-200 ${header}`}>
                <Link href='/behance'>
                    <Image className='w-28 invert' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Behance_logo.svg/1280px-Behance_logo.svg.png'} width={300} height={300} alt='Logo'></Image>
                </Link>
                <nav className='flex gap-5'>
                    <Link href='/behance/for-you' className='text-xl text-white font-bold'>For You</Link>
                    <a href='#' className='text-xl text-white font-bold'>Discover</a>
                    <a href='#' className='text-xl text-white font-bold'>Hire</a>
                    <a href='#' className='text-xl text-white font-bold'>Assets</a>
                    <a href='#' className='text-xl text-white font-bold'>Jobs</a>
                </nav>
                <div className='w-2/6'>
                    <form method="get">
                        <input className='w-full rounded-full border-0 px-5 py-2 text-white text-xl searchofheader placeholder:text-white placeholder:text-xl placeholder:px-3 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus-within::py-3' type="search" placeholder="Search..." />
                    </form>
                </div>
                <div className='flex gap-5 items-center '>
                    <BellIcon className="h-6 w-6 text-white text-xl " />
                    <button className="bg-white text-blue-600 rounded-full px-6 py-2 text-lg font-semibold">Log In</button>
                    <button className="bg-blue-600 text-white rounded-full px-6 py-2 text-lg font-semibold">Sign Up</button>
                    <span className='text-white text-2xl font-extralight'>|</span>
                    <button className="bg-white text-black rounded-full px-6 py-2 text-lg font-semibold flex gap-1 items-center"><Image className='w-6' src={"https://seeklogo.com/images/A/adobe-creative-cloud-2020-new-logo-B6324473C2-seeklogo.com.png"} width={20} height={20} alt='icon' /> Free Trial</button>
                    <Image className='w-20' src={'https://www.pngkit.com/png/full/332-3322196_adobe-logo-adobe-logo-black-and-white.png'} width={300} height={300} alt='logo Adobe' />
                </div>
            </header>
        </>
    )
}

export default Bheader