import React from 'react'
import Button from '../components/button/page'

export default function page() {
  return (
    <div className='main'>
      <div className='left'>
        <h1 className='font-bold text-2xl py-4'>Sign In</h1>
        <h2>Please Login To Continue</h2>
        <p className='signinpera'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa sit ni
          si, earum expedita harum voluptate pariatur fugit moles</p>

        <form>
          <input type="email" placeholder='Email' /><br />
          <input type="password" placeholder='Password' /><br />
          <input type="password" placeholder='Confirm Password' />
         <div className='localbtn'>
         <Button item="Sign in"/>
         </div>
        </form>
      </div>
      <div className='right'>
     
       <div className='btn'>
      <a href="/patient">  <Button item="Patient"/></a>
        <Button item="Doctor"/>
        <Button item="Admin"/>
       </div>
       <img
          src="35.jpg"
          width={400}
          height={300}
          alt="Picture of the author"
        />
      </div>
    </div>
  )
}
