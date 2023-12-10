import Link from 'next/link'
import React from 'react'
import ButtonLight from './ButtonLight'
import ButtonDark from './ButtonDark'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex h-[75px] fixed w-full shadow-2xl bg-[#74e9ed] z-50 justify-between px-8 py-4  items-center '>
<div className='flex items-center gap-2'>
  <Image
  src={"/nav.png"}
  width={40}
  height={40}/>
  <span className='font-bold text-xl'><Link href={"/"}>JN Hospital</Link></span>
</div>
<ul className='flex gap-8 font-bold'>
  <li className='hover:bg-[#cee1ff] py-2 px-2 rounded-lg'><Link href={"/"}>Home</Link></li>
  <li className='hover:bg-[#cee1ff] py-2 px-2 rounded-lg'><Link href={"/Apponiment"}>Appointment</Link></li>
  <li className='hover:bg-[#cee1ff] py-2 px-2 rounded-lg'><Link href={"/Schedule"}>Schedule</Link></li>
  <li className='hover:bg-[#cee1ff] py-2 px-2 rounded-lg '><Link href={"/history"}>Medical History</Link></li>
</ul>
<div className='flex gap-4 py-2'>
  <Link href={'/signup'}><ButtonLight/></Link>
  <Link href={'/signin'}> <ButtonDark title="Register"/></Link>
</div>

    </div>
  )
}

export default Navbar