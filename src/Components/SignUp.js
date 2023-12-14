import React,{useState} from 'react'
import './Styles/LoginSignUp.css'
import { NavLink,useNavigate } from 'react-router-dom'

export default function Signup(props) {

    const navigate=useNavigate()  
    const goBack=()=>{
        navigate('/')
    }

    const [credentials, setcredentials] = useState({name:"",email:"",password:""})

      const handleSignUp=async(e)=>{
        e.preventDefault()
        props.setProgress(20)
        const response = await fetch("https://booksjunctionserver.onrender.com/auth/createuser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",              
            },
            body: JSON.stringify({
              name:credentials.name,
              email:credentials.email,
              password:credentials.password
            })
          });
        props.setProgress(40)
        const data=await response.json()
        console.log(data)
        props.setProgress(80)
        const status=data.status
        if(status){
            const token=data.authtoken
            localStorage.setItem('authtoken',token)
            goBack()
            props.showAlert("Account Created Successfully..!","success")
            props.setProgress(100)
            return 
        }
        else{
            props.showAlert("Try Again..Enter the details Carefully","danger")
            props.setProgress(100)

        }
     }
    const onChange=(e)=>{
        setcredentials({...credentials,[e.target.name]:e.target.value})
  }

  return (
    
    <>
    <div style={{paddingTop:"10px"}} className="form-container ">
    <i onClick={goBack} className="fa-solid fa-xmark form-close"></i>
    <div className="form form-signup">
                <form action="#">
                    <h4>Signup</h4>
                    <div className="input-box">
                        <input onChange={onChange}  autoComplete='current-name' type="text" name="name" value={credentials.name}  placeholder="Enter your Name" required/>
                        <i className="fa-regular fa-envelope email"></i>
                    </div>
                    <div className="input-box">
                        <input onChange={onChange}  autoComplete="current-email" type="email" name="email" value={credentials.email}  placeholder="Enter your Email" required/>
                        <i className="fa-regular fa-envelope email"></i>
                    </div>
                    <div className="input-box">
                        <input onChange={onChange}  autoComplete="current-password" type="password" name="password" value={credentials.password}  placeholder="Enter your Password" required/>
                        <i className="fa-solid fa-lock lock"></i>
                    </div>                
                    <button onClick={handleSignUp}  type="submit" className="log-sign-button">Register</button>
                    <div className="log-in-signup">
                        Already have an Account?<NavLink to="/login" id="login">Login</NavLink>
                    </div>
                </form>
            </div>
            </div>
    
    </>
  )
}
