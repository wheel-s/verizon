import React, { useState } from 'react'
import more from './more.module.css'
import close from '../../images/close.png'
const More = (props) => {

    const [copied, setcopied] = useState('Copy link')
      const cancel =()=>{
        props.onCancel()
    }
      const cover =()=>{
        props.onCover()
    }
     const copy =()=>{
        navigator.clipboard.writeText(window.location.href)
        setcopied('copied')
        setInterval(()=>{setcopied('Copy link')},2000)
    }
  return (
    <div className={more.more}>
      <div className={more.card}>
        <button className={more.button2} onClick={cancel}><img src={close} alt={'pin'} width={20} height={20}  className={more.img}/> options </button> 
        <hr className={more.hr}></hr>
            <h4 className={more.name}>{}</h4>
            <p onClick={copy}>{copied}</p>
            <p onClick={cover}>Hide </p>
            <a><p>Download image</p></a>
            <p > Report</p>
    
                  
        </div>
    </div>
  )
}

export default More
