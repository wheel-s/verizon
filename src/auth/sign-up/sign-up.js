import React from 'react'
import AuthForm from '../../components/AuthForm'
import Layout from '../../components/layout'

const SignUp = () => {
  return (
    <div className='wrapper'>
      <Layout/>
      <div  className='signin'>
      <AuthForm type='sign-Up'/>
      </div>
       

    </div>
  )
}

export default SignUp