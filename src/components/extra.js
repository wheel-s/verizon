import React from 'react'
import extra from './extra.module.css'

const Extra = (props) => {
    const cancel =()=>{
        props.onClick()
    }
  return (
    <div className={extra.extra}>
      <div className={extra.card}>
        <h4 className={extra.name}>{}</h4>
         <p className={extra.pa}>no notifacion !!</p>
         <div className={extra.btn}>
          
        <button className={extra.button2} onClick={cancel}>cancel</button>  
         </div>
      
      </div>

   
    </div>
  )
}

export default Extra
