import React, { useEffect,useContext,useState } from 'react'
import {Outlet, useNavigate,NavLink} from 'react-router-dom'
import BookCard from './BookCard';
import './Styles/Books.css'
import { useBookContext } from './Context/BookContext'

export default function Books(props) {

  const [name, setname] = useState("")

  const fetchName=async()=>{
    const response = await fetch("https://booksjunctionserver.onrender.com/auth/getuser", {
            method: "GET",
            headers: {
              "Content-Type": "application/json", 
              "auth-token":`${localStorage.getItem("authtoken")}`             
            }
          });
        const data=await response.json()
        setname(data.name)   
  }

  const navigate=useNavigate()


  const {booksArr,getAllBooks}=useBookContext();


  const searchFunc=()=>{
    let searchBar=document.getElementsByClassName('searchText')[0]
    searchBar.addEventListener('input',()=>{
      let inputVal=searchBar.value

      let bookCards=document.getElementsByClassName('card')

      Array.from(bookCards).forEach((card)=>{
        
        if(card.textContent.includes(inputVal)){
          card.style.display="block"
        }
        else{
          card.style.display="none"
        }
      })      
      
    })
  }


 useEffect(()=>{
   if(localStorage.getItem("authtoken")===null){
     navigate('/login')
     props.setProgress(100)
     window.scrollTo(0,0)
    }
    else{
      getAllBooks()
      fetchName()
      searchFunc()
    }     
 })
 
 
  return (
    <>
    
      <div className="note-body">

        <div className="note-welcome">
          <div className="intro">
            <h3>Welcome,</h3>
            <h3
              style={{
                fontSize: "1.5rem",
                color: "red",
                marginLeft: "5px",
                fontFamily: "serif",
              }}
            >
              {name}
            </h3>
            <p>
              Welcome to Books Junction, where your thoughts find a home.
            </p>
          </div>

          <div className="searchbar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input className="searchText" type="text" placeholder="Search your book here....." />
          </div>
        </div>

        <div className="mid-msg">
          <h4>
            Remember Everything with Ease{" "}
            <i className="fa-regular fa-folder-open"></i>
          </h4>
          <NavLink className="mybutton" to="/books/addbook"><small>ADD BOOK!</small></NavLink>
        </div>

        <div className="containerBox">
          {booksArr.length===0?<h5 style={{fontFamily:"cursive"}}>Your Store is Empty!</h5>:booksArr.map((book)=>{
            return <BookCard showAlert={props.showAlert}  key={book.bookid} book={book} />
          })
          }
        </div>
        
      </div>
      <Outlet/>
    </>
  );
}
