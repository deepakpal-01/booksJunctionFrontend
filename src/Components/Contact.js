import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import './Styles/Contact.css'
import { RiCloseFill } from "react-icons/ri";
import contactImage2 from './Images/contactImage2.png'

export default function Contact(props) {

  const [name,setname]=useState()
    const [email,setemail]=useState()

    const fillData=async()=>{
        if(localStorage.getItem("authtoken")!==null){            
            const response = await fetch("http://127.0.0.1:4000/auth/getuser", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json", 
                  "auth-token":`${localStorage.getItem("authtoken")}`             
                }
              });
            const data=await response.json()
            setname(data.name)
            setemail(data.email)
        }
    }

    const submitForm=()=>{
      props.setProgress(10)
      props.setProgress(40)
      props.setProgress(70)
      props.setProgress(100)

  }

    useEffect(() => {
      props.setProgress(10)
      props.setProgress(40)
      fillData()
      props.setProgress(70)
      window.scrollTo(0,0)
      props.setProgress(100)
    },[])


  return (
    <>
    <header>
      <span><h1>Contact Us</h1>
      <p> Your literary inquiries and bookish curiosities are just a message away.</p>
      </span>
    </header>
    
    <main>
    <div className="contact-form">
        <form  action="https://formspree.io/f/mnqeaaal"  method="POST">

                <input  name="name" id="name" type="text" placeholder='Your Name' autoComplete='off' value={name}  required/>

                <input name="Email" className=" my-2" id="email" type="email" placeholder='Your Email' autoComplete='off' value={email}  required/>
                <br />

                <input className=" my-2 " name="subject" id="subject" type="text" placeholder='Subject' autoComplete='off' required/>
                <br />

                <textarea className=" my-2 " style={{padding:"3px"}} name="message" id="message" cols="49" rows="8" placeholder='Your Message' required></textarea>
                <br />

                <button onClick={submitForm} type="submit" className="mybutton my-3" >Submit</button>
                {/* <NavLink className="mybutton my-3" to="">Submit</NavLink> */}
        </form>
    </div>
    <div className='main-image-box'>
        <img src={contactImage2} alt="banner.."/>
    </div>
    </main>

    
    </>
  )
}
