import React from 'react'
import { useState, useEffect } from 'react'

import auth from  './Auth.module.css'
import logo from '../images/logo.png'
import {Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'



const AuthForm = ({type}) => {

  const [Msg, setMsg] = useState('')
  const [userName, setuserName]= useState('') 
  const [email, setemail] = useState('')
  
  const [isLoading, setisLoading] = useState(false)
  const [password, setpassword] = useState('')

  const [data, setdata] = useState('')
  const value = JSON.stringify( {email:email, password:password})
    const register = JSON.stringify( {username:userName, email:email, password:password})
  const navigate = new useNavigate()
  function submitHandler(e){
      e.preventDefault()

      
      setisLoading(true)

        

     

      if(type==='sign-in'){
        
   
      fetch('https://server-l9fy.vercel.app/api/user/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:value
        })
     .then(res=>{
      if (!res.ok){
        setMsg(res.json())
        setTimeout(() => {setMsg('')},5000);
      }
      return res.json()})
    .then((datas)=>{setdata(datas)

      localStorage.setItem('user',  JSON.stringify({datas}))
      navigate('/home')
    } 
  )
     .catch(err=>{console.log(err)})
    
     setTimeout(() => {
    
     }, 1000);
   
setInterval(()=>{setisLoading(false)},3000)
  



} 
      
      if(type==='sign-Up'){
          fetch('https://server-l9fy.vercel.app/api/user/register',{
         method:'POST',
        headers:{'Content-Type':'application/json'},
        body:register
        })
     .then(res=>{
      if (!res.ok){
        setMsg(res.json())
        setTimeout(() => {setMsg('')},5000);
      }
      return res.json()})
    .then((datas)=>{setdata(datas)

      localStorage.setItem('user',  JSON.stringify({datas}))
      navigate('/home')
    } 
  )
     .catch(err=>{console.log(err)})
    
     setTimeout(() => {
    
     }, 1000);
   
    setInterval(()=>{setisLoading(false)},3000)
  
       
      
      }
      //response router.push(/)//
    setTimeout(() => {
         setemail('')
      setpassword('')
      setuserName('')
    }, 10000)
   
  }

  return (
    <div className={auth.center} >
    <div className={auth.form}>
      <div className={auth.back}>
    <header className={auth.header}>
    <Link>
    <div className={auth.bar}>
      <div className={auth.section}>
      <img src={logo} width={35} height={35} className={auth.img} alt={'yes'}></img>
      <h2 className={auth.name}>Verizon</h2>
     
      </div  >
      </div>
   </Link>



   </header>
         
          <form className={auth.form2} onSubmit={submitHandler}>
              { type ==='sign-Up' &&  (
                <>
                  <div className={auth.control}>
                  <label htmlFor='Full Name'>Username</label>
                  <input type='text' id='' placeholder='Enter your Username' value={userName} onChange={(e)=>setuserName(e.target.value)}/>
                  </div>

                  
                </>
              )}
            <div className={auth.control}>
              <label htmlFor='email'>Email</label>
              <input type='text' id='email' placeholder='Enter your Email' value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>

            <div className={auth.control}>
              <label htmlFor='password'>Password</label>
              <input type='password' id='password' placeholder='Enter your Password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
              
            </div>

            <div className={auth.action}>
             <button  onClick={submitHandler} disabled={isLoading} >
              {isLoading ?(
                <div>
                
                Loading...
                </div>
              ): type === 'sign-in' ? 'Sign In ': 'Sign Up'}
             </button>

            </div>
            <p className={auth.Msg}> {Msg}</p>

            
            <p className={auth.sign}>{type === 'sign-in'? 'Dont have an acount? ': 'Already have an account?'}
            <NavLink className={auth.link}  to ={type === 'sign-in'? '/': '/sign-in'}>
              
              {type === 'sign-in'? 'Sign-up': 'Sign-in'}
            
             </NavLink></p>
          
          </form>
  
        

        
        
        
        

    </div>
    </div>
    </div>
  )
}

export default AuthForm