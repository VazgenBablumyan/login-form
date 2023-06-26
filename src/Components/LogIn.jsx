import React, { useState } from 'react'

export default function() {
    const [firstName, setFirstName] = useState()
    const [lastName, setLArstName] = useState()
    const [email, setEmail] = useState()
    const [phoneNumber, setphoneNumber] = useState()


  return (
    <div className='LogInForm'>
        <form >
            <label className='title'> First Name </label>
            <input className="inputField" type='text' value={firstName} plarequired="true"/>
            <label className='title'> Last Name </label>
            <input className="inputField" type='text' value={lastName} required="true"/>     
            <label className='title'> Email </label>
            <input className="inputField" type="email" value={email} required="true"/>   
            <label className='title'> Phone Number</label>
            <input className="inputField" type='tel' value={phoneNumber} required="true"/>
            </form>

    </div>
  )
}
