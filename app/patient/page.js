import React from 'react'
import Button from '../components/button/page'
import Link from 'next/link'
import ButtonDark from '../components/ButtonDark'

export default function page() {
  return (
    <div className='main'>
    <div className='left'>
      <h1>Admit Patient</h1>

      <form>
        <input type="text" placeholder='Patient Name' /><br />
        <input type="text" placeholder='Patient Father' /><br />
        <input type="text" placeholder='patient Cnic' /><br />
        <input type="text" placeholder='patient Phone ' />


       <div className='localbtn'>
       <Button item="Add Patient"/>
       </div>
      </form>
    </div>
    <div className='right'>
   
     <div className='btn'>
      <Button item="Patient"/>
      <Link href="/signin"> <Button item="Sign In"/></Link> 
      <Link  href="/signup"><ButtonDark title="Sign Up"/></Link>
     </div>
     <img
        src="36.jpg"
        width={400}
        height={300}
        alt="Picture of the author"
      />
    </div>
  </div>
  )
}
