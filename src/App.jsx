import React, { useState } from 'react'
import './App.css'
function RegForm() {

  const [field, updateFields] = useState({
    fName: "",
    lName: "",
    email: "",
    number: ""
  })

  const [valid, setValid] = useState(false)
  const [submit, doSubmit] = useState(false)

  const handleSubmission = (event) => {
    event.preventDefault()
    if (field.fName && field.lName && field.email && field.number) {
      setValid(true)
    }
    doSubmit(true)
  }

  return (
    <div className='RegForm-section'>
      <form className='RegForm' onSubmit={(e) => { handleSubmission(e) }}>
        {submit && valid ? (<div id="message">Registration Done</div>) : null}
        <input
          type="text"
          id='Fname'
          placeholder='First Name'
          onChange={(e) => {
            updateFields(
              {
                ...field,
                fName: e.target.value
              }
            )
          }} />
        {submit && !field.fName ? <div id="error">Please Enter First Name</div> : null}

        <input type="text" id='Lname' placeholder='Last Name'
          onChange={(e) => {
            updateFields(
              {
                ...field,
                lName: e.target.value
              }
            )
          }}
        />
        {submit && !field.lName ? <div id="error">Please Enter Last Name</div> : null}

        <input type="email" name="" id="Mail" placeholder='Email'
          onChange={(e) => {
            updateFields(
              {
                ...field,
                email: e.target.value
              }
            )
          }} />

        {submit && !field.email ? <div id="error">Please Enter Mail</div> : null}

        <input type="number" name="" id="PhNum" placeholder='Phone Number'
          onChange={(e) => {
            updateFields(
              {
                ...field,
                number: e.target.value
              }
            )
          }} />
        {submit && !field.number ? <div id="error">Please Enter Phone Number</div> : null}

        <button type="submit">Register Form!</button>
      </form>
    </div>
  )
}

export default RegForm
