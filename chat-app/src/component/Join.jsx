import { useState } from 'react';
import React from 'react'
import './Join.css'
import { Link } from 'react-router-dom'

let user;

const Join = () => {

  const [name, setName] = useState("");

  const sendUser = () => {
    user = document.getElementById('msgInp').value
    document.getElementById('msgInp').value = ""
  }
  return (
    <div className='JoinPage'>
      <div className="JoinContainer">
        <h2>Welcome to My Chat App</h2>
        <input onChange={(e) => setName(e.target.value)} className='msgInp' id='msgInp' type="text" placeholder='Enter your Name:' />
        <Link onClick={(e)=>!name?e.preventDefault():null} to={'/chat'}><button onClick={sendUser} className="btn">Log in</button></Link>
      </div>
    </div>
  )
}

export { user };
export default Join