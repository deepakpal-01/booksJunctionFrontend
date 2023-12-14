import React, { useContext,useState,useEffect } from 'react'
import './Styles/EditBook.css'
import { useNavigate } from 'react-router-dom'
import { useBookContext } from './Context/BookContext'


export default function EditNote(props) {
  const navigate=useNavigate()
    const goBack=()=>{
        navigate(-1)
    }

    const {editStates,editBook}=useBookContext()


  const [newBook,setnewBook]=useState(
    {newId:editStates.id,
      newTitle:editStates.title,
      newDescription:editStates.description,
      newCategory:editStates.category,
      newPrice:editStates.price,
      newDiscount:editStates.discount
    })
   
  const onChange=(e)=>{
      setnewBook({...newBook,[e.target.name]:e.target.value})        
  }

  const handleEditNoteBtn=()=>{
      editBook(newBook.newId,newBook.newTitle,newBook.newDescription,newBook.newCategory,newBook.newPrice,newBook.newDiscount)
      goBack()
      props.showAlert("Updated Note Successfully !","success")
    }
    useEffect(()=>{
      
    },[])
    
   
    

  return (
     <> 
        <div className="modal fade show" style={{display:"block"}} id="staticBackdrop" data-bs-backdrop="static"tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div  className="modal-dialog edit-box">
          <div style={{background:"whitesmoke"}}  className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Update Note</h1>
              <button onClick={goBack} type="button" className="btn-close"  aria-label="Close"></button>
            </div>
            <div style={{padding:"0px 15px"}} className="form form-note ">
            <form action="#">
                
                <div className="note-input-box">
                    <input onChange={onChange} style={{background:"inherit"}}  type="text" name="newTitle" defaultValue={editStates.title} placeholder="Your Title?"  required/>
                    <i className="fa-regular fa-clipboard email"></i>
                </div>
                <div className="note-input-box">
                    <input onChange={onChange} style={{background:"inherit"}}  type="text" name="newDescription"  defaultValue={editStates.description}
                      placeholder="Your Description?" required/>
                    <i className="fa-solid fa-pen-to-square lock"></i>
                </div>
                <div className="note-input-box">
                    <input onChange={onChange} style={{background:"inherit"}}  type="text" name="newCategory"  defaultValue={editStates.category}
                     placeholder="Your Category" required/>
                    <i className="fa-solid fa-pen-to-square lock"></i>
                </div>
                <div className="note-input-box">
                    <input onChange={onChange} style={{background:"inherit"}}  type="numbers" name="newPrice"  defaultValue={editStates.price}
                      placeholder="Book Price?" required/>
                    <i className="fa-solid fa-pen-to-square lock"></i>
                </div>
                <div className="note-input-box">
                    <input onChange={onChange} style={{background:"inherit"}}  type="text" name="newDiscount"  defaultValue={editStates.discount}
                      placeholder="Book Discount?" required/>
                    <i className="fa-solid fa-pen-to-square lock"></i>
                </div>
            </form>
            
            
        </div>  
           
            <div className="modal-footer">
              <button onClick={goBack} type="button" className="btn btn-secondary">Close</button>
              <button onClick={handleEditNoteBtn} type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
