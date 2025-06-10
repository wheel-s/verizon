import React, { useEffect, useState } from 'react'
import home from './home.module.css'
import delet from '../../images/delete.png'
import homme from '../../images/wifi.png'
import image from '../../images/dark.webp'
import more from '../../images/more.png'
import { NavLink,Link, useNavigate } from 'react-router-dom'


const Home = () => {
 
    const[images, setImages] = useState([])
  const[imgId, setImgId] = useState('')
    const[imguser, setimguser] = useState('')
  const navigate = new useNavigate()
  const storage = localStorage.getItem('user')

  localStorage.setItem('imgBY' , imguser)
    if(storage==null){
    navigate('/')
  }
 useEffect(()=>{

   fetch('https://server-l9fy.vercel.app/api/info')
    .then(res=>{return res.json()})
   .then(datas=>{setImages(datas)


   })
    .catch(err=>{console.log(err)})
     
  

 },[])


  return (
    <div className={home.home}>
         <p className={home.p}> for you</p>
         <hr></hr>
      <div className={home.grid} >
    {
      images.map((item, index)=>{
      
        return(
         <Link to={`/single/${item._id}`} key={index} >  
       <div className='sho'>
          <div className={home.card} >
          
          <img src={item.image} alt={'img'} className={home.img} onClick={()=>{setimguser(item.user)}} data-id={item._id} /> 
            
            </div>
        </div>
      </Link> 
    
                  
        
        )
      })
    }
   </div>
  
    
    </div>
  )
}

export default Home
