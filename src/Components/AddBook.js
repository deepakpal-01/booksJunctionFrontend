import React, { useContext,useEffect,useState } from 'react'
import './Styles/AddBook.css'
import { useNavigate } from 'react-router-dom'
import { useBookContext } from './Context/BookContext'


export default function AddNote(props) {
    const navigate=useNavigate()
    const goBack=()=>{
        navigate(-1)
    }


    const {addBook}=useBookContext()

    const [newBook,setnewBook]=useState({title:"",description:"",category:"",price:"",discount:""})
   

    const handleAddBookBtn=()=>{
        if(newBook.title.length<3 || newBook.description.length<5){
            props.showAlert("Length of input should be minimum 5 characters!","danger")
            return
        }
        addBook(newBook.title,newBook.description,newBook.category,newBook.price,newBook.discount)
        goBack()
        props.showAlert("Successfully Added a Book !","success")
    }
    const onChange=(e)=>{
        setnewBook({...newBook,[e.target.name]:e.target.value})
    }
   
    useEffect(()=>{
    },[])

  return (
    <>
         
 
    <div className="addnoteBox ">
    <i onClick={goBack} className="fa-solid fa-xmark form-close"></i>
        
        <div className="form form-note ">
            <form action="#">
                <h4>Your Book</h4>
                <hr />
                <div className="note-input-box">
                    <input onChange={onChange}  type="text" name="title" placeholder="Book Title" minLength={3} required/>
                    <i className="fa-regular fa-clipboard email"></i>
                </div>
                <div className="note-input-box">
                    <input onChange={onChange}  type="text" name="description" placeholder="Book Description" minLength={5} required/>
                    <i className="fa-solid fa-pen-to-square lock"></i>
                </div>
                <div className="note-input-box">
                    <input onChange={onChange}  type="text" name="category" placeholder="Category" minLength={5} required/>
                    <i class="fa-solid fa-layer-group lock"></i>
                </div>
                <div className="note-input-box">
                    <input onChange={onChange}  type="numbers" name="price" placeholder="Price" minLength={5} required/>
                    <i class="fa-solid fa-indian-rupee-sign lock"></i>
                </div>
                <div className="note-input-box">
                    <input onChange={onChange}  type="numbers" name="discount" placeholder="Discount (in %)" minLength={5} required/>
                    <i class="fa-solid fa-tag lock"></i>
                </div>
            </form>
           
                <button id="addNoteSubmitBtn" onClick={handleAddBookBtn}  type="submit" className="add-button">ADD BOOK</button>
            
        </div>                
    </div> 

</>
  )
}
