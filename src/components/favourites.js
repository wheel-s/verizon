import React from 'react'
import home from '../pages/home/home.module.css'
import image from '../images/dark.webp'
import homme from '../images/wifi.png'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Favourites = () => {
    const[images, setImages] = useState([])
  const[imgId, setImgId] = useState('')
    const[imguser, setimguser] = useState('')
  const navigate = new useNavigate()
  const storage = localStorage.getItem('user')
    const tokens=JSON.parse(storage)
    const {datas} = tokens
    const{user, userId, token} = datas
    
 



 useEffect(()=>{
   fetch('https://server-l9fy.vercel.app/api/favourite',
  
    {

     headers:{
      'authorization':`Bearer ${token}`
    }}
   )
    .then(res=>{return res.json()})
   .then(datas=>{console.log(datas)


   })
    .catch(err=>{console.log(err)})
     
  

 },[])

  return (
    <div className={home.home}>

        <div className={home.grid} >
    {

    
      
      images.map((item, index)=>{
      
        return(
         <Link to={`/favsingle/${item._id}`} key={index} >  
       
          <div className={home.card} >
          
          <img src={item.image} alt={'img'} className={home.img} onClick={()=>{setimguser(item.user)}} data-id={item._id} /> 
            
            </div>
      </Link> 
    
                  
        
        )
      })
   

    }
    </div>
     
    </div>
  )
}

export default Favourites
