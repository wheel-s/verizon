import React from 'react'
import mobile from './mobile.module.css'
import { useState } from 'react'
import menu from '../images/menu.png'
import more from '../images/logo.png'
import MobileNav from './mobileNav'
import Static from './static'
const Navbar = () => {
       const [show, setshow] = useState(false)
     const onCancel =()=>{
          setshow(false)}
          
     const open =()=>{
          setshow(true)}

    const [email, setemail] =useState('')
    
  return (
  
     
    <div>
       <div className={mobile.mobilenav}>
                                      
       <div className={mobile.nav}>
            <div className={mobile.nav}>                     
          <img src={menu} alt={'yes'} width={26} height={29} className={mobile.navbar}  onClick={open} ></img>
             <img src={more} alt={'yes'} width={39} height={39} className={mobile.logos}  onClick={open} ></img>  
             <p className={mobile.veri}>verizon</p>    
               
         
           </div> 
                                   
          
      
                                      
     <div className={mobile.search}>
            

       
            <button className={mobile.sign}>SignIn</button>                                
      </div>
                                       
    
     </div>
                                      
      </div>
      
      <Static/>
        { show &&< MobileNav onCancel={onCancel}/>}
      
    </div>
  )
}

export default Navbar
