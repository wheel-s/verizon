import React from 'react'

import mobile from './static.module.css'
import {NavLink} from 'react-router-dom'

import homes from '../images/home.png'
import banks from '../images/search.png'
import transfers from '../images/users.png'
import settings from '../images/settings.png'
import historys from '../images/history.png'
import feedback from '../images/feedback2.png'




const Static = () => {



  const pathName = window.location.pathname
  const  isActive = pathName === '/' || pathName.startsWith(`/`)
    const home='/home'
    const game = '/search'
   const  quiz='/user'
   const upload = '/add'
   const hold = '/account'
    const holds = '/feedback'
  return (




    <div className={mobile.mobile}>

      

      <div className={('links' , {'active':isActive})}  >

        <div className={mobile.home } >
           
            <NavLink to={home} className={mobile.homelink}>
            <img src={homes} alt={'yes'} className={mobile.homeimg} width={28}></img>
             <figure> Home </figure>
             </NavLink>
           </div> 
        <div className={mobile.banks}>
          
          <NavLink to={game} className={mobile.banklink} >
          <img src={banks} alt={'yes'} className={mobile.bank} width={24} ></img>
            <figure>Search</figure>
            </NavLink>
           </div>
        <div className={mobile.history}>
         
          <NavLink to={upload} className={mobile.historylink}>
          <img src={historys} alt={'yes'} className={mobile.historys}  width={23}></img>
           <figure>Create</figure>
            </NavLink>
          </div>
      <div className={mobile.transfer}>
        
        <NavLink to={quiz} className={mobile.transferlink}>
        <img src={transfers} alt={'yes'} width={22} className={mobile.transfers}></img>
          <figure>you</figure>
          </NavLink>
        </div>
        <div className={mobile.transfer}>
         <NavLink to={hold} className={mobile.transferlink}>
        <img src={settings} alt={'yes'} width={22} className={mobile.transfers}></img>
         <figure> settings</figure>
          </NavLink>
        </div>
         <div className={mobile.transfer}>
         <NavLink to={holds} className={mobile.transferlink}>
        <img src={feedback} alt={'yes'} width={22} className={mobile.transfers}></img>
         <figure> feedback</figure>
          </NavLink>
        </div>
    
           
           
          
     

      </div>
        
    </div>
  )
}

export default Static