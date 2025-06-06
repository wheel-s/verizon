import React from 'react'
import AuthForm from '../../components/AuthForm'
import Layout from '../../components/layout'
const SignIn = () => {
  return (
    <div className='wrapper'>
    <Layout/>
      <div  className='signin'>
      <AuthForm type='sign-in'/>
      </div>
     </div>
  )
}

export default SignIn