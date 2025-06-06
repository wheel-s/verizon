import React from 'react'
import edit from './edit.module.css'
import { useState } from 'react'

const EditPost = () => {
     const [input, setinput] = useState('')
  return (
    <div className={edit.edit}>
      <div className={edit.header}>
        <h4>Edit post</h4>
       <p> Keep your personal detials private. Information you add here is visible to anyone who can view your profile</p>
         

      </div>
         <div className={edit.control}>
                
         <input type='text'  placeholder='Title' value={input} onChange={(e)=>setinput(e.target.value)}/>
        <input type='text'  placeholder='Description' value={input} onChange={(e)=>setinput(e.target.value)}/>
         <input type='text'  placeholder='link' value={input} onChange={(e)=>setinput(e.target.value)}/>  
         <button className={edit.button}>Edit</button>       
     </div>
     <div>
   
     </div>
    </div>
  )
}

export default EditPost
