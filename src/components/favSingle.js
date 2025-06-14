import React from 'react'
import { useState ,useEffect } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import single from '../pages/single/single.module.css'
import image from '../images/pic8.webp'
import back from '../images/arrow.png'
import msg from '../images/chat.png'
import like from '../images/heart.png'
import share from '../images/share.png'
import more from '../images/more.png'

import More from '../pages/single/more'
import imag from '../images/pic7.jpg'



const Favingle = () => {
    const storage = localStorage.getItem('user')
    const tokens=JSON.parse(storage)
    const {datas} = tokens
    const{user, userId, token} = datas
    const navigate = useNavigate()
    const [Msg, setMsg] =useState('')
    const [img, setimg] = useState('')
    const {id} = useParams()

 localStorage.setItem('ID', id)
  const imguser = localStorage.getItem('imgBY')

  useEffect(()=>{
    fetch(`https://server-l9fy.vercel.app/api/favourite/${id}`)
    .then(res=>{return res.json()})
   .then(datas=>{setimg(datas)})
    .catch(err=>{console.log(err)})
    
  },[]) 
  useEffect(()=>{
  const ad = document.querySelector('#show')
  setTimeout(() => {
    ad.classList.add('shows') 
  }, 800);
})
  
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
const Remove=()=>{
   
     fetch(`https://server-l9fy.vercel.app/api/favourite/${id}`,{
      method:'DELETE',
      headers:{
        'authorization':`Bearer ${token}`,
        'Content-Type':'application/json'},
    
       })
       .then(res=>{return res.json()})
      .then(datas=>console.log(datas))
      .catch(err=>console.log(err))
      
      setMsg('***Removed from favourites***')
      setTimeout(() => {
      setMsg('')
      navigate('/user')
      },3000);
}
  return (
    <div className={single.single}>
         <div id='show'>
       <NavLink to='/user'><img src={back} alt={'img'} width={20}  className={single.back} /></NavLink>
       <div className={single.grid}>
     
      <div className={single.card}>
          
          <img src={img.image} alt={'img'}  className={single.img} id='img' />
          
      </div>
      </div>
      </div>
        
      <div className={single.icons}>
        <div>
        <img src={like} alt={'img'} width={29}  className={single.like} onClick={Like} id='likes' />
       <NavLink to='/comment'> <img src={msg} alt={'img'} width={29}  className={single.comment} /></NavLink>
          <img src={more} alt={'img'} width={26}  className={single.more} onClick={show} />
         </div>
          <section> <button className={single.button}  onClick={Remove}>Remove</button> </section>
      </div>
    <h3>{Msg}</h3>
         <div className='hide' id='close' >
            <More onCancel={close } onCover={Cover} />
          </div>

    </div>
  )
}

export default Favingle
