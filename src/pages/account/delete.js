import React from 'react'
import account from './account.module.css'
import Delay from '../../components/delay'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Delete = () => {
     const [Msg, setMsg] = useState('')
     const [data, setdata] = useState('')
        const navigate = new useNavigate()
      const storage = localStorage.getItem('user')
      const tokens=JSON.parse(storage)
      const {datas} = tokens
       const{user, userId, token} = datas
  const cancel =()=>{
    const ad = document.querySelector('#ad')
    ad.classList.add('hide')
  
  }
   const dlete =()=>{
    const ad = document.querySelector('#ad')
     ad.classList.remove('hide')
    ad.classList.add('show') 
     
  }

 const deleteAccount = ()=>{
   
 fetch(`https://server-l9fy.vercel.app/api/user/${userId}`,{
  method:'DELETE'
 })
    .then(res=>{
        if(!res.ok){
        setMsg(res.json())
        setTimeout(() => {setMsg('')},5000);
      }
      return res.json()})
   .then(datas=>{setdata(datas)
          setMsg(datas)
        setTimeout(() => {setMsg('')},3000);
      setTimeout(() => {
        const ad = document.querySelector('#ad')
     ad.classList.remove('show')
    ad.classList.add('hide') 
      }, 5000);

        setTimeout(() => {navigate("/")},10000);
  })
    .catch(err=>{console.log(err)})

  }
  return (
    <div className={account.delete} >
      <h3>Delete your account</h3>
      <p className={account.pas}>Closing your account means all your data will be deleted</p>
          <div className={account.name}>
               <p className={account.t}>T</p>
               <p className={account.pa}>Toshiro</p>

               
          </div>
           <div className={account.center}><button className={account.button} onClick={dlete}>Delete</button></div>
          
           <div className='hide' id='ad'>
            <Delay onCancel={cancel} onDelete={deleteAccount} msg={Msg}/>
          </div>
       
    </div>
  )
}

export default Delete
