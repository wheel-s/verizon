import React from 'react'
import delay from './delay.module.css'
import { useState } from 'react'
const Delay = ( props) => {
  const [Msg, setMsg] = useState('***')
     const cancel =()=>{
        props.onCancel()
    }
       const dlete =()=>{
        props.onDelete()
        
    }
    
  return (
    <div className={delay.delay}>
   <div className={delay.card}>
        <h4 className={delay.name}></h4>
         <p className={delay.pa}>Are you sure you want to delete your account</p>
          <p className={delay.msg}>{props.msg}</p>
         <div className={delay.btn}>
          <button className={delay.button1} onClick={dlete}>delete</button>  
        <button className={delay.button2} onClick={cancel}>cancel</button>  
         </div>
      
      </div>
    </div>
  )
}

export default Delay
