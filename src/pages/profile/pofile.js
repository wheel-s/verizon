import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import profile from './profile.module.css'
import Saved from '../../components/saved'
import Favourites from '../../components/favourites'

const Pofile = () => {
  const Created =()=>{
      const ad = document.querySelector('#ad')
          ad.classList.remove('hp')
     ad.classList.add('hr')
     setshow(true)
  
  }
    const Save =()=>{
      const ad = document.querySelector('#ad')
   ad.classList.remove('hr')
      ad.classList.add('hp')
      setshow(false)
  
  }
  const [show, setshow]= useState(true)
  return (
    <div className={profile.profile}>
       <div className={profile.account}>
        <div className={profile.header}>
            <NavLink to='/account'><p className={profile.p}>T</p></NavLink></div>
           <div className={profile.txt}> 
                     <p>Toshiro</p>
                     <span>p@cuzan2002</span>
                <div>
                    0.......2
                </div>
                     
          </div>
        </div>
        <div className={profile.nav}>
            <p className={profile.create} onClick={Created}> Saved </p>
            <p className={profile.save} onClick={Save}>Created</p>
          
        </div>

      <hr className={profile.hr} id='ad'></hr>
        {show && <div className={profile.saved}>
          <Favourites/>
        </div>}
       {!show && <div className={profile.saved}>
          <Saved/>
        </div>}
        
    </div>
  )
}

export default Pofile
