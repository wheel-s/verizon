import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import account from './account.module.css'
import arrow from '../../images/arrow.png'
import Extra from '../../components/extra'
import Out from '../../components/out'

const Account = () => {
  const cancel =()=>{
    const ad = document.querySelector('#ad')
    ad.classList.add('hide')

  }
  const Not =()=>{
    const ad = document.querySelector('#ad')
     ad.classList.remove('hide')
    ad.classList.add('show')
  
  }
  const Close = ()=>{
      const ad = document.querySelector('#active')
    ad.classList.add('hide')
  }
    const out =()=>{
    const active = document.querySelector('#active')
    active.classList.remove('hide')
    active.classList.add('show')

  
  
  }
  const navigate = useNavigate() 
  const storage = localStorage.getItem('user')
  const tokens=JSON.parse(storage)
  const {datas} = tokens
  const{user, userId, token} = datas
  if(storage==null){
    navigate('/')
  }
  return (
    <div className={account.account}>
    
   <NavLink to='/profile'>    <div className={account.act}>
         
        
        <div className={account.txt}> 
             <p className={account.p}>{user[0]}</p>
        
          <p className={account.p1}>{user}</p>
          <span>veiw profile</span>
             
        </div>
        </div>
        <p></p>
   </NavLink>
        <section className={account.set}>settings</section>
    <NavLink to='/edit' >  <div className={account.manage}>
          Account Management
          <img src={arrow} alt={'lee'} width={20} className={account.arr}/>
        </div></NavLink>
        <div className={account.not} onClick={Not}>Notifications

           <img src={arrow} alt={'lee'} width={20} className={account.arr}/>
        </div>

         <section className={account.set}>logs</section>

        <div className={account.not} onClick={out}>logout
           <img src={arrow} alt={'lee'} width={20} className={account.arr}/>
        </div>
     <NavLink to='/delete'>   <div className={account.not}>Delete your data and account
       <img src={arrow} alt={'lee'} width={20} className={account.arr}/>
      </div></NavLink>
      <section className={account.set}>support</section>
       <div className={account.not}>Help centre
         <img src={arrow} alt={'lee'} width={20} className={account.arr}/>
       </div>
     <div className={account.not}>Terms of service</div>   
     <div className={account.not}>About
       <img src={arrow} alt={'lee'} width={20} className={account.arr}/>
     </div>
          <div className=' set hide' id='ad'>
            <Extra onClick={cancel}/>
          </div>
          <div className='out hide' id='active'>
            <Out onClick={Close}/>
          </div>
    </div>
  )
}

export default Account
