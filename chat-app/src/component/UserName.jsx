import React from 'react'
import './UserName.css'
const UserName = ({name}) => {
  return (
    <div className='userNameBox'>
        <div className="name">
            {name}
        </div>
    </div>
  )
}

export default UserName