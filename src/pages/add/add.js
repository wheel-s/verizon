import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../../images/josh.webp'
import add from './add.module.css'

const  Add = () => {
 
  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')  
  const [link, setlink] = useState('')
  const [image, setimage] = useState('**')
   const [Msg, setMsg] = useState('')
   const storage = localStorage.getItem('user')
   const tokens=JSON.parse(storage)
  const {datas} = tokens
  const{user, userId, token} = datas


  const handleChange= (e)=>{
   e.preventDefault()
  
    
   const data = new FileReader()
  
   data.addEventListener('load', ()=>{
     setimage(data.result)
   })
   data.readAsDataURL(e.target.files[0])
 
 }
 const navigate = new useNavigate()

 const info = JSON.stringify( {image:image,title:title, user:user, link:link})
const [data, setdata] = useState('')

   const Upload= ()=>{


     if(!token){
    setMsg('**Create account to upload***')
     setTimeout(() => {
      setMsg('')
     }, 3000);
     
    setTimeout(() => {
     navigate('/')
    }, 5000);
    
 }
    fetch('https://server-l9fy.vercel.app/api/info',{
    method:'POST',
    headers:{
      'authorization':`Bearer ${token}`,
      'Content-Type':'application/json'},
    body:info
     }
     )
     .then(res=>{
      if(!res.ok){
        setMsg(res)
        setTimeout(() => {setMsg('')},5000);
      }
      return res.json()})
    .then(datas=>{console.log(datas)
      setMsg("Successfully Posted Image")
      setTimeout(() => {
        setMsg('')
      }, 4000);
     })
     .catch(err=>{console.log(err)})
   
     setTimeout(() => {
       settitle('')
      setdescription('')
      setlink('')
      setimage('')
     }, 5000);
    
   }

  
  return (
    <div className={add.add}>
        <h4 className='p'>Create memories</h4>
        <div className={add.pic}>
        <input  type='file'className={add.file}    onChange={handleChange}/>
         </div>  
      <div className={add.header}>
      
        <img src={image} width={144}height={210} className={add.img}/>
      </div>

      <div className={add.details}>
        Title
         <input type='text'  placeholder='Tell everyone what your pin is about' className={add.input}value={title} onChange={(e)=>settitle(e.target.value)}/>
          <hr className={add.hr}></hr>
          Description
         <input type='text'  placeholder='Add a description' value={description} onChange={(e)=>setdescription(e.target.value)} className={add.input}/>    
  <hr className={add.hr}></hr>
        Link
        
        <input type='text'  placeholder='Add your link here' value={link}className={add.input} onChange={(e)=>setlink(e.target.value)}/>  
        <hr className={add.hr}></hr>
      <p className={add.msg}>{Msg}</p>
   <div className={add.cent}>

     <button className={add.button} onClick={Upload}>Create</button>    
   </div>
   
      </div>
    </div>
  )
}

export default Add
