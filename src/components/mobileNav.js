import React from 'react'

import mobile from './mobile.module.css'
import {NavLink} from 'react-router-dom'
import { useState } from 'react'
import homes from '../images/home.png'
import banks from '../images/search.png'
import transfers from '../images/users.png'
import transfer from '../images/settings.png'
import historys from '../images/history.png'
import close from '../images/close.png'



const MobileNav = (props) => {


     const [openMenu, setopenMenu] = useState(false)
       const OpenMenu =()=>{
            setopenMenu(false)
       }
  function closeMenu(){
      props.onCancel()
      
  }

  const pathName = window.location.pathname
  const  isActive = pathName === '/' || pathName.startsWith(`/`)
    const home='/home'
    const game = '/search'
   const  quiz='/profile'
   const upload = '/add'
   const hold = '/account'

  return (




    <div className={mobile.mobile}>

      
    <div className='close'>
      <div className={mobile.nav}>
        

        <div className={mobile.bar}>
        <img src={close} width={20} height={19} className={mobile.close} alt={'yes'} onClick={closeMenu}></img>
          
      <div className={mobile.section}>
      <h2 className={mobile.name}>Verizon</h2>
     
     

      </div>
      <div className={('links' , {'actives':isActive})}  >

        <div className={mobile.home } >
           
            <NavLink to={home} className={mobile.homelink}>
            <img src={homes} alt={'yes'} className={mobile.homeimg} width={28}></img>
              Home
             </NavLink>
           </div> 
        <div className={mobile.banks}>
          
          <NavLink to={game} className={mobile.banklink} >
          <img src={banks} alt={'yes'} className={mobile.bank} width={24} ></img>
            Search
            </NavLink>
           </div>
        <div className={mobile.history}>
         
          <NavLink to={upload} className={mobile.historylink}>
          <img src={historys} alt={'yes'} className={mobile.historys}  width={23}></img>
            Create
            </NavLink>
          </div>
         
          <hr className={mobile.hr}></hr>
          <br></br>
          <br/>
      <div className={mobile.transfer}>
        
        <NavLink to={quiz} className={mobile.transferlink}>
        <img src={transfers} alt={'yes'} width={22} className={mobile.transfers}></img>
          Profile
          </NavLink>
        </div>
        <div className={mobile.transfer}>
         <NavLink to={hold} className={mobile.transferlink}>
        <img src={transfer} alt={'yes'} width={22} className={mobile.transfers}></img>
          Account
          </NavLink>
        </div>
    
           
           
          
      </div>
      </div>
      </div> 
      </div>
        
    </div>
  )
}

export default MobileNav