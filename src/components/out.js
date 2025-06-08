import React from 'react'
import { useNavigate } from 'react-router-dom'
import delay from './delay.module.css'
const Out = ( props) => {
   const navigate  = useNavigate()
     const cancel =()=>{
        props.onClick()
    }
 
     const Logout =()=>{
        props.onClick()
        setTimeout(() => {
         navigate('/')  
         
        }, 1000);
          const storage = localStorage.setItem('user', '')
    }
    
  return (
    <div className={delay.delay}>
   <div className={delay.card}>
        <h4 className={delay.name}></h4>
         <p className={delay.pa}>Are you sure you want to logout your account</p>
         <div className={delay.btn}>
          <button className={delay.button1} onClick={Logout}>logout</button>  
        <button className={delay.button2} onClick={cancel}>cancel</button>  
         </div>
      
      </div>
    </div>
  )
}

export default Out
