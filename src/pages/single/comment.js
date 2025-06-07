import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import comment from './comment.module.css'
import image from '../../images/pic7.jpg'
import close from '../../images/close.png'
import Msg from '../msg/msg'


const Comment = () => {
  const [input, setinput] =useState('')
 const [value, setValue] =useState([])
  const [Msg, setMsg] =useState('')
   const imgId = localStorage.getItem('ID')
   
     const imguser = localStorage.getItem('imgBY')

    useEffect(()=>{
      fetch(`https://server-l9fy.vercel.app/api/comment/${imgId}`)
      .then(res=>{
        if(!res.ok){
          console.log(res)
        
        }
        return res.json()})
     .then(datas=>{setValue(datas)})
      .catch(err=>{console.log(err)})
      
    },[Msg])
    const Post = ()=>{
  const storage = localStorage.getItem('user')
     if(storage === null){
      console.log(storage)
    }
    else{
    const tokens=JSON.parse(storage)
    const {datas} = tokens
    const{user, userId, token} = datas
    }
  const info = JSON.stringify( {comment:input, user:user, createdBy:imgId})
   
   fetch('https://server-l9fy.vercel.app/api/comment',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'},
    body:info
     })
     .then(res=>{
      if(!res.ok){
        console.log(res.json())
      }
      return res
    })
    .then(datas=>console.log(datas))
    .catch(err=>console.log(err))
    setinput('')
    setMsg('***posted comment***')
    setTimeout(() => {
    setMsg('')
    },3000);
    }
  return (
    <div className={comment.comment}>
      <div className={comment.bott}>
      <div className={comment.header}>
    
        <img src={image} alt={'pin'} width={47} height={48} className={comment.img}></img>
        <p>posted by {`***${imguser}***`}</p>
        
        
      </div>
      <Link to={`/single/${imgId}`}> 
        <div className={comment.close}>
            <img src={close} alt={'pin'} width={20} height={20}  className={comment.img}></img> 
        </div>
    </Link> 
      <hr className={comment.hr}></hr>
       <h4 className={comment.h4}>{value.length} comments</h4>
      <div className={comment.details}>
         
       { 
      
       value.map((item, index)=>{
        return(
          <Link key={index}>
          <div className={comment.main}  >
            <div className={comment.flex}>
                <img src={item.img} alt={item.user[0]} width={38} height={38}  className={comment.image} />
               <p className={comment.user}>{item.user}</p>
            </div>
  
            <div >
           
              <p className={comment.maincomment}>{item.comment} </p>
            </div>
          </div>
          </Link>
        )
       })
    
        }

      </div>

      <div className={comment.bottom}>
    <input type='text'  placeholder='Add a comment' value={input} onChange={(e)=>setinput(e.target.value)} className={comment.input}/> 
    <p className={comment.msg}>{Msg}</p> 
      <button className={comment.button} onClick={Post}>post</button>       
      </div>
      
    </div>
    </div>
  )
}

export default Comment
