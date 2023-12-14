import React,{useState} from 'react'
import { NavLink,useNavigate} from 'react-router-dom'
import './Styles/LoginSignUp.css'

export default function Login(props) {

    const navigate=useNavigate()
    
    const goBack=()=>{
        navigate('/')      
      }
      const [credentials, setcredentials] = useState({email:"",password:""})

      const handleLogin=async(e)=>{
        e.preventDefault()
        props.setProgress(20)
        const response = await fetch("https://booksjunctionserver.onrender.com/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",              
            },
            body: JSON.stringify({
              email:credentials.email,
              password:credentials.password
            })
          });

        props.setProgress(50)
        const data=await response.json()
        props.setProgress(80)
        const status=data.status
        if(status){
          const token=data.authtoken
          localStorage.setItem('authtoken',token)
          goBack()
          props.showAlert("Logged in successfully!","success")
          props.setProgress(100)
          return 
        }
        else{
          const showMsg=data.response===undefined?'Invalid Credentials':data.response;
          console.log(showMsg)
            props.showAlert(`${showMsg},Try Again`,"danger")
            props.setProgress(100)
        }
      }
      const onChange=(e)=>{
            setcredentials({...credentials,[e.target.name]:e.target.value})
      }

  return (
    <>
        <div className="form-container ">
        <i onClick={goBack} className="fa-solid fa-xmark form-close"></i>
            
            <div className="form form-log-in ">
                <form action="#">
                    <h4>Login</h4>
                    <div className="input-box">
                        <input onChange={onChange}  autoComplete="current-email" type="email" name="email" value={credentials.email}   placeholder="Enter your Email" required/>
                        <i className="fa-regular fa-envelope email"></i>
                    </div>
                    <div className="input-box">
                        <input  onChange={onChange}  autoComplete="current-password" type="password" name="password" value={credentials.password}  placeholder="Enter your Password" required/>
                        <i className="fa-solid fa-lock lock"></i>
                    </div>
                    
                    <button onClick={handleLogin}  type="submit" className="log-sign-button">Login Now</button>
                    <div className="log-in-signup">
                        Dont't have an Account?<NavLink to="/signup" id="signup">SignUp</NavLink>
                    </div>
                </form>
            </div>                
        </div>

    </>
  )
}
