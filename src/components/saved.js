import React from 'react'
import home from '../pages/home/home.module.css'
import image from '../images/pic8.webp'
import homme from '../images/lovely.avif'
import { useState, useEffect } from 'react'
import { NavLink,Link, useNavigate } from 'react-router-dom'

const Saved = () => {
      const[images, setImages] = useState([])
  const[imgId, setImgId] = useState('')
    const[imguser, setimguser] = useState('')
  const navigate = new useNavigate()
  const storage = localStorage.getItem('user')
    if(!storage == null || !storage ==''){
    const tokens=JSON.parse(storage)
    const {datas} = tokens
    const{user, userId, token} = datas
    }



 useEffect(()=>{
   fetch(`https://server-l9fy.vercel.app/api/info/created/${userId}`)
    .then(res=>{return res.json()})
   .then(datas=>{console.log(datas)


   })
    .catch(err=>{console.log(err)})
     



 },[])
  return (
    <div className={home.home}>
        <div className={home.grid} >
    {
      
    }
    </div>
      <div className={home.grid} >
        <NavLink to='/savedsingle'>
          <div className={home.card}>
          
                <img src={image} alt={'img'} className={home.img} />
              
            
            </div>
           
               <div className={home.card}>
          
                <img src={homme} alt={'img'} className={home.img} />
              
            
            </div>
        </NavLink>
        </div>
    </div>
  )
}

export default Saved
