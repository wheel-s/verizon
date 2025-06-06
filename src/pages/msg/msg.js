import React, { useState } from 'react'
import msg from './msg.module.css' 
import{data } from './random'

const Msg = () => {
  let randomnNo = Math.floor(Math.random()* 6)

    let [index, setindex]=useState(0)
  const [verse, setverse]=useState(data[index])
const New=()=>{
    setindex(randomnNo)
   setverse(data[index])
  }

  return (
    <div className={msg.msg}>
      <div className={msg.card}>
        <h4 className={msg.name}>{verse.verse}</h4>
         <p className={msg.pa}>{verse.read}</p>
         <div className={msg.btn}>
           
        <button className={msg.button2} onClick={New}>New Msg</button>  
         </div>
      
      </div>
    </div>
  )
}

export default Msg
