
import Layout from "./components/layout";
import {Route, Routes} from 'react-router-dom'
import { useEffect, useState } from "react";
import Home from './pages/home/home'
import Msg from './pages/msg/msg'
import Search from './pages/search/search'
import User from './pages/user/user'
import Add from './pages/add/add'
import Pofile from "./pages/profile/pofile";
import Edit from "./pages/account/edit";
import Delete from "./pages/account/delete";
import SignIn from './auth/sign-in/sigin-in';
import SignUP from "./auth/sign-up/sign-up";
import Account from "./pages/account/account";
import Single from "./pages/single/single";
import Comment from "./pages/single/comment";
import Favsingle from "./components/favSingle";
import Savedsingle from "./components/savedSingle";
import Navbar from "./components/navbar";


function App() {
  const [show, setshow] =useState(false)
  
    

  return (
    <div className="App">
 
      <Navbar />
       <Layout/>
    
      <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/msg' element={<Msg/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/edit' element={<Edit/>}/>
          <Route path='/delete' element={<Delete/>}/>
          <Route path='/profile' element={<Pofile/>}></Route>
          <Route path='/single/:id' element={<Single/>}></Route>
          <Route path='/favsingle/:id' element={<Favsingle/>}></Route>
          <Route path='/savedsingle' element={<Savedsingle/>}></Route>
          <Route path='/comment' element={<Comment/>}></Route>
          <Route path='/account' element={<Account/>}></Route>
          <Route path='/' element={<SignUP/>}></Route>
          <Route path='/sign-in' element={<SignIn/>}></Route>
            
            
      </Routes>


      
    </div>
  );
}

export default App;
