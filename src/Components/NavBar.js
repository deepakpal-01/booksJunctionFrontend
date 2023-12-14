import React,{useState} from 'react'
import './Styles/NavBar.css'
import logo from './Images/logo.png'
import {NavLink,useNavigate} from 'react-router-dom'
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineLogout  } from "react-icons/md";
import LoadingBar from 'react-top-loading-bar'



export default function NavBar({progress,setProgress,showAlert}) {

    const navigate=useNavigate()

    const goToLogin=()=>{
        navigate('/login')
    }
   
    const signOutUser=()=>{
        setProgress(30)
        localStorage.removeItem("authtoken")
        setProgress(50)
        navigate('/')
        setProgress(80)
        navigate('/')
        window.location.reload(true)
        showAlert("Signed Out Successfully!","success")
      }


  return (
    <>

        <LoadingBar
                    color='#f11946'
                    progress={progress}
                    onLoaderFinished={setProgress}
            />
    
          
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <img className='navbar-brand logo' src={logo} alt="BooksJunction" width={"220px"}/>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link " aria-current="page" to="/books">Books</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink className="nav-link " aria-current="page" to="/contact">Contact</NavLink>
                          </li>
                      </ul>

                      {localStorage.getItem("authtoken")===null?<FaCircleUser className='login-icon my-1 mx-2' onClick={goToLogin}/>:
                         <MdOutlineLogout  className='login-icon my-1 mx-2' onClick={signOutUser}/>}
                 
                  </div>
              </div>
          </nav>
          
    
    </>
  )
}
