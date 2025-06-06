import React from 'react'
import edit from './edit.module.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
     
      const[data, setdata] = useState('')
      const [username, setusername] = useState('')
      const [email, setemail] = useState('')  
      const [password, setpassword] = useState('')
      
      const [Msg, setMsg] = useState(' ')
      const navigate = new useNavigate()
      const storage = localStorage.getItem('user')
      const tokens=JSON.parse(storage)
      const {datas} = tokens
      const{user, userId, token} = datas
  
      const EDIT= ()=>{
          const info = JSON.stringify( {username:username,email:email, password:password})
        console.log(info)
         fetch(`https://server-l9fy.vercel.app/api/user/${userId}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:info
         })
         .then(res=>{
            if(!res.ok){
            console.log(res.json())
              }
          return res.json()})
        .then(datas=>{setdata(datas)
                setMsg("User edit sucessful")
                setTimeout(() => {
                setMsg('')
              }, 4000);   
        })
         .catch(err=>{console.log(err)})
         
       }
     
       useEffect(()=>{
       console.log(data)
       },[])
  return (
    <div className={edit.edit}>
      <div className={edit.header}>
        <h4>Edit profile</h4>
       <p> Keep your personal detials private. Information you add here is visible to anyone who can view your profile</p>
         <p className={edit.p}>T</p>

      </div>
         <div className={edit.control}>
                
         <input type='text'  placeholder='enter new username' value={username} onChange={(e)=>setusername(e.target.value)}/>
        <input type='text'  placeholder='enter new email' value={email} onChange={(e)=>setemail(e.target.value)}/>
         <input type='text'  placeholder='enter new password' value={password} onChange={(e)=>setpassword(e.target.value)}/> 
         <p className={edit.msg}>{Msg}</p> 
         <button className={edit.button} onClick={EDIT}>Edit</button>       
     </div>
     <div>
   
     </div>
    </div>
  )
}

export default Edit
