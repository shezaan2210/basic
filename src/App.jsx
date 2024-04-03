import React from 'react'
import { useState } from 'react'

const App = () => {
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [graduated, setgraduated] = useState(false)
  const [tc, settc] = useState('male')
  const [option, setoption] = useState('option 1')

  const changeHandler = (e) => setusername(e.target.value)

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username, email, password, graduated, tc, option);
  }



  return (
    <>
      <form onSubmit={submitHandler}>
        <input onChange={(e) => setusername(e.target.value)} type="text" placeholder='username' value={username} /> <br />
        <input onChange={(e) => setemail(e.target.value)} type="email" placeholder='email' value={email} /> <br />
        <input onChange={(e) => setpassword(e.target.value)} type="password" placeholder='password' value={password} /> <br />
        <input type="checkbox" onChange={(e) => setgraduated(e.target.checked)} checked={graduated} /> graduated <br />
        <input type="radio" value={'male'} onChange={(e) => settc(e.target.value)} checked={tc === 'male' ? true : false} /> Male <br />
        <input type="radio" value={'female'} onChange={(e) => settc(e.target.value)} checked={tc === 'female' ? true : false} /> Female
        <button >submit</button>

      </form>

      <select value={option} onChange={(e)=>setoption(e.target.value)}>
      <option value="option 1">option 1</option>
      <option value="option 2">option 2</option>
      <option value="option 3">option 3</option>

      </select>

    </>
  )
}

export default App