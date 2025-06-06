import React from 'react'
import layout from './layout.module.css'
import home from '../images/home.png'
import add from '../images/add.png'
import history from '../images/search.png'
import user from '../images/users.png'
import web from '../images/msj.png'

import { useState } from 'react'

import{ Link} from 'react-router-dom'



const Layout = () => {

  return (
    <div>
      <div className={layout.center}>
      <div className={layout.img} >

          <Link to='/home'>  <img src={home} alt={'home'} width={33} className={layout.home}/></Link>
          <Link to='/search'>  <img src={history} alt={'search'} width={27} height={28} className={layout.search}/></Link>
          <Link to='/add'>  <img src={add} alt={'add'} width={30} className={layout.add}/></Link>
           <Link to='/msg'> <img src={web} alt={'msg'} width={30} className={layout.msg}/></Link>
             <Link to='/user'> <img src={user} alt={'profile'} width={30}className={layout.profile}/></Link>
      </div>
     
    </div>
   
    </div>
  )
}

export default Layout
