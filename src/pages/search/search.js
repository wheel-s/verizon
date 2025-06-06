import React from 'react'
import { useState, useEffect } from 'react'
import search from './search.module.css'
import img from '../../images/josh.webp'
import arrow from '../../images/arrow.png'
import pic1 from '../../images/lovely.avif'
import pic2 from '../../images/goku.jpg'
import pic3 from '../../images/pic5.jpg'
import pic4 from '../../images/pic4.jpg'
import pic5 from '../../images/pic8.webp'

const Search = () => {
  const [input, setinput] = useState('')
    const [current, setcurrent] = useState(0)
    
  const images =[
      {image:pic1,},
      {image:pic2},
      {image:pic3},
      {image:pic4},
      {image:pic5}
  ]
  useEffect(()=>{
    setTimeout(()=>{
      next()
    }, 9000)
  },[current])
  const next = ()=>{
   const last = current === images.length-1
   const nex = last ? 0 :current+1
   setcurrent(nex)


  }
    const back = ()=>{
    if(current<=0){
      setcurrent(images.length - 1)
    }
    else{
      setcurrent(current - 1 % images.length)
    }
  }
  return (
    <div className={search.search}>
        <div className={search.control}>
          
          <input type='text'  placeholder='search' value={input} onChange={(e)=>setinput(e.target.value)}/>
          </div>
            <p className={search.p}>Not available</p>
          <div className={search.slider}>      
            <div className={search.card} id='bar' >
              <img src={arrow} alt={'arrow'} className={search.right} width={20} onClick={back}></img>
              <img src={images[current].image}alt={'pic'} className={search.img}></img>
               <img src={arrow} alt={'arrow'} className={search.left} width={20} onClick={next}></img>
            </div>
                 
          </div>
     
         

    </div>
  )
}

export default Search
