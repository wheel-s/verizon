import React from 'react'
import share from './share.module.css'

const Share = () => {
     const cancel =()=>{
        props.onClick()
    }
  return (
    <div>
       <div className={share.card}>
              <h4 className={share.name}>{}</h4>
               <p className={share.pa}>no notifacion !!</p>
               <div className={share.btn}>
                
              <button className={share.button2} onClick={cancel}>cancel</button>  
               </div>
            
            </div>
    </div>
  )
}

export default Share
