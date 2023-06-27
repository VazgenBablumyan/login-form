import React, { useEffect, useState } from 'react'
import "./login.css"

const setStorage = (key, value) => {localStorage.setItem(key, JSON.stringify(value))}
const getStorage = (key) => JSON.parse(localStorage.getItem(key))

export default function () {
  const [firstName, setFirstName] = useState(getStorage("firstName") ?? "" )
  const [lastName, setLastName] = useState(getStorage("lastName") ?? "" )
  const [email, setEmail] = useState(getStorage("email") ?? "" )
  const [phoneNumber, setphoneNumber] = useState(getStorage("phoneNumber") ?? "" )
  const [disabled, setDisabled] = useState(true)

  useEffect(() => isDisabled(),[firstName,lastName,email,phoneNumber])



  function isDisabled() {
    if (!!firstName && !!lastName && !!email && !!phoneNumber) {
      return setDisabled(false)
    }
    return setDisabled(true)
  }

  return (
    <div className='logInForm'>
      <form >
        <label className='title'> First Name </label>
        <input
          className="inputField"
          type='text'
          onChange={(event) => {
            setStorage("firstName",event.target.value)
            setFirstName(event.target.value)
          }
          }
          value={firstName}
          required />
        <label className='title'> Last Name </label>
        <input
          className="inputField"
          type='text'
          onChange={(event) => {
            setStorage("lastName",event.target.value)
            setLastName(event.target.value)}}
          value={lastName}
          required />
        <label className='title'> Email </label>
        <input
          className="inputField"
          type="email"
          onChange={(event) => {
            setStorage("email", event.target.value)
            setEmail(event.target.value)}}
          value={email}
          required />
        <label className='title'> Phone Number</label>
        <input
          className="inputField"
          type='tel'
          onChange={(event) => {
            setStorage("phoneNumber",event.target.value) 
            setphoneNumber(event.target.value)}}
          value={phoneNumber}
          required />
        <button disabled={disabled}> Log In</button>
      </form>

    </div>
  )
}
