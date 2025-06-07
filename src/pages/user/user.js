import React from 'react'
import { useState} from 'react'
import { NavLink } from 'react-router-dom'
import user from './user.module.css'
import Favourites from '../../components/favourites'

const User = () => {
  
    const [input, setinput] = useState('')
    const [fav, setfav] = useState(false)
 
  return (
    <div className={user.user}>
      <div className={user.header}>
       <div className={user.account}>
            <NavLink to='/account'><p className={user.p}>T</p></NavLink>
        </div>
       <div className={user.control}>
                
         <input type='text'  placeholder='Enter your Email' value={input} onChange={(e)=>setinput(e.target.value)}/>
          </div>
      </div>
      <p className={user.pa}>your favourites</p>
      <hr className={user.hr}></hr>
      <div className={user.fav}>
          <Favourites/>
      </div>
   
       {fav && 
        <div className={user.no}>
          <span> 🕸️</span>
          <p>No save pin yet </p>
        </div>
       }

    </div>
  )
}

export default User
