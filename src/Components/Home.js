import React,{useState,useEffect} from 'react'
import './Styles/Home.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { LiaBookSolid } from "react-icons/lia"
import herosection3 from './Images/herosection3.jpg'
import herosection5 from './Images/herosection5.png'
import { FaRegCalendarCheck } from "react-icons/fa6";

export default function Home(props) {

  const{setProgress,showAlert}=props

  const navigate=useNavigate();

  
  const [firstBtn, setfirstBtn] = useState("RESGISTER NOW!")


  function gotoSignUp(){
    setProgress(50)
    navigate('/signup')
    setProgress(100)
  }
  const goToAddBook=()=>{
    setProgress(30)
    if(userLoggedIn()) {setProgress(70); navigate('./addbook')}
    else navigate('/login')
    setProgress(100)     
  }
  const userLoggedIn=()=>{
    if(localStorage.getItem("authtoken")===null) {return false;}    
    else setfirstBtn("Sign Out"); return true;
    
  }
  const signOutUser=()=>{
    localStorage.removeItem("authtoken")
    props.showAlert("Signed Out Successfully!","success")
    navigate('/')
    window.location.reload(true)

  }

  useEffect(()=>{
    props.setProgress(10)
    props.setProgress(50)
    props.setProgress(100)
    userLoggedIn()
    window.scrollTo(0,0)
    // eslint-disable-next-line
  },[firstBtn]);


  return (
    <>
    <div className="hero-section hero-section0"></div>

    <div className="hero-section banner my-4">
      <h3>Efficiently organize, track, and manage your literary collection</h3>
      <p>Step into a realm of literary wonder where every book holds the promise of a new adventure</p>
      <span><button className="mybutton my-3 mx-3" onClick={localStorage.getItem("authtoken")===null?gotoSignUp:signOutUser}><small>{firstBtn}</small></button> 
      <button className="mybutton my-3 mx-3" onClick={goToAddBook}><small>ADD BOOK!</small></button></span> 

    </div>

    <div className="hero-section hero-section1 my-4">
      <div className="section section1"></div>
      <div className="section section2">
        <h1 className='my-3'>Books Junction <LiaBookSolid /></h1>
        <p>Discover the literary crossroads at BooksJunction, where stories unfold and knowledge meets imagination. Navigating the Intersection of Wisdom and Wonder, One Page at a Time.Endless Worlds of Imagination and Knowledge</p>
       
        <NavLink className="mybutton my-3" to="/books">Visit Store!</NavLink> 
      </div>
    </div>

    <div className="hero-section banner banner-2 my-4">
      <span>
      <div className="home-card">
      <p className="home-card-title">Register Yourself</p>
      <p className="small-desc">
      Register now to embark on a personalized reading journey, access exclusive discounts, and join a community of fellow book enthusiasts. Your next chapter awaits – sign up and let the adventures begin!!
      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
      </span>
      <span>
      <div className="home-card">
      <p className="home-card-title">Add Your Books</p>
      <p className="small-desc">
      Curate your own literary haven! Share your favorite books with our community by adding them to our store. Your recommendations will not only enrich our collection but also connect you with fellow readers who share your passion
      </p>
      <div className="go-corner">
        <div className="go-arrow">→</div>
      </div>
    </div>
      </span>
    </div>
    
    <div className="hero-section hero-section2 my-4">
      <div className="section section3">
        <h4>Reach Out To Us</h4>
        <p>Your literary inquiries and bookish curiosities are just a message away.</p>
        <span><NavLink className="mybutton my-3" to="/contact"><small>CONTACT US!</small></NavLink></span>
      </div>
      <div className="section section4 mx-4 my-4">
      <img className='banner3' src={herosection5} alt="banner......" />
      </div>
    </div>
    <Outlet/>
    </>
  )
}
