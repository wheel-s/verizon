import React from 'react'
import { useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import users from './user.module.css'
import Favourites from '../../components/favourites'

const User = () => {
  
    const [input, setinput] = useState('')
    const [fav, setfav] = useState(false)
    const navigate = useNavigate() 
  const storage = localStorage.getItem('user')
   const tokens=JSON.parse(storage)
  const {datas} = tokens
  const{user, userId, token} = datas
  if(storage==null){
    navigate('/')
  }
 
  return (
    <div className={users.user}>
      <div className={users.header}>
       <div className={users.account}>
            <NavLink to='/account'><p className={users.p}>{user[0]}</p></NavLink>
        </div>
       <div className={users.control}>
                
         <input type='text'  placeholder='Enter your Email' value={input} onChange={(e)=>setinput(e.target.value)}/>
          </div>
      </div>
      <p className={users.pa}>your favourites</p>
      <hr className={users.hr}></hr>
      <div className={users.fav}>
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
