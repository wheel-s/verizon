import React from 'react'
import { useState ,useEffect } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import single from './single.module.css'
import image from '../../images/pic8.webp'
import back from '../../images/arrow.png'
import msg from '../../images/chat.png'
import like from '../../images/heart.png'
import share from '../../images/share.png'
import more from '../../images/more.png'
import Home from '../home/home'
import More from './more'
import imag from '../../images/pic7.jpg'



const Single = () => {
    const storage = localStorage.getItem('user')
    if(storage === null){
      console.log(storage)
    }
    else{
    const tokens=JSON.parse(storage)
    const {datas} = tokens
    const{user, userId, token} = datas
    }
    const [Msg, setMsg] =useState('')

const [img, setimg] = useState('')
  const {id} = useParams()
  const navigate = useNavigate()
 localStorage.setItem('ID', id)
  const imguser = localStorage.getItem('imgBY')

  useEffect(()=>{
    fetch(`https://server-l9fy.vercel.app/api/info/${id}`)
    .then(res=>{return res.json()})
   .then(datas=>{setimg(datas)})
    .catch(err=>{console.log(err)})
    
  },[]) 
  
 const  close= ()=>{
      const ad = document.querySelector('#close')
        ad.classList.remove('show')
      ad.classList.add('hide')
  }
  const show= ()=>{
      const ad = document.querySelector('#close')
        ad.classList.remove('hide')
      ad.classList.add('show')
  }

  const Like = ()=>{
     const ad = document.querySelector('#likes')
     ad.classList.toggle('likes')
    ad.classList.add('show')
  }
   const Cover = ()=>{
     const ad = document.querySelector('#img')
     ad.classList.toggle('hide')
    
  }
const Save=()=>{

  
     if(!token){
    setMsg('**Create account to add to favourites**')
     setTimeout(() => {
      setMsg('')
     }, 3000);
     
    setTimeout(() => {
     navigate('/')
    }, 5000);

  }
    const info = JSON.stringify( {image:img.image, user:userId,})     
     fetch('https://server-l9fy.vercel.app/api/favourite',{
      method:'POST',
      headers:{
        'authorization':`Bearer ${token}`,
        'Content-Type':'application/json'},
      body:info
       })
       .then(res=>{
        if(!res.ok){
          console.log(res.json())
        
        }
        return res
      })
      .then(datas=> { console.log(datas)
        setMsg('**saved to favourites**') 
       setTimeout(() => {
     setMsg('')
      },3000);})
      .catch(err=>console.log(err))     
}
  return (
    <div className={single.single}>
       <NavLink to='/home'><img src={back} alt={'img'} width={20}  className={single.back} /></NavLink>
       <div className={single.grid}>
      <div className={single.card}>
          
          <img src={img.image} alt={'img'}  className={single.img} id='img' />
          
      </div>
      </div>
      <div className={single.icons}>
        <div>
        <img src={like} alt={'img'} width={29}  className={single.like} onClick={Like} id='likes' />
       <NavLink to='/comment'> <img src={msg} alt={'img'} width={29}  className={single.comment} /></NavLink>

          <img src={more} alt={'img'} width={26}  className={single.more} onClick={show} />
         </div>
          <section> <button className={single.button}  onClick={Save}>Save</button> </section>
      </div>
      <h3>{Msg}</h3>
      <div className={single.details}>
         <img src={imag} alt={'pin'} width={47} height={48} className={single.img}></img>
           <p className={single.p}>posted by {imguser}</p>
      </div>
      <div className={single.title}>
        <p>Title: {img.title}</p>
       <p> Link: {img.link}</p>
        <p>Description: {img.description}</p>
      </div>
         <div className='hide' id='close' >
            <More onCancel={close } onCover={Cover} />
          </div>

    </div>
  )
}

export default Single
