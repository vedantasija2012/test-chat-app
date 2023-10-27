import { useState } from 'react';
import React from 'react'
import './Join.css'
import { Link } from 'react-router-dom'
import { atom, useRecoilState } from 'recoil';

let user;

const textState = atom({
  key: 'nameState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

const Join = () => {

  const [name, setName] = useRecoilState(textState);
  return (
    <div className='JoinPage'>
      <div className="JoinContainer">
        <h2>Welcome to My Chat App</h2>
        <input onChange={(e) => setName(e.target.value)} className='msgInp' id='msgInp' type="text" placeholder='Enter your Name:' />
        <Link onClick={(e)=>!name?e.preventDefault():null} to={'/chat'}><button className="btn">Log in</button></Link>
      </div>
    </div>
  )
}

export { textState };
export default Join