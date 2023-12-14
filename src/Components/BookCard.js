import React ,{useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import './Styles/BookCard.css'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { useBookContext } from './Context/BookContext';


export default function BookCard(props) {  

  const {book}=props;

  const navigate=useNavigate()


  const {deleteBook,updateFields}=useBookContext()
  

  const handleDelete=()=>{
    deleteBook(book.bookid)
    props.showAlert("Successfully Deleted a Book !","success")
  }

  const handleEdit=(e)=>{ 
    updateFields(book.bookid,book.title,book.description,book.category,book.price,book.discount)
    navigate('/books/editbook')    
  }
  


  return (
    <>
    <div className="card">
            <div className="card-header">
              <p>{book.title}</p>
              <span className="util-btn">
                  <i onClick={handleEdit}  className="fa-solid fa-pen-to-square mx-3"></i>                
                  <i  onClick={handleDelete}  className="fa-solid fa-trash"></i>                
              </span>
            </div>
    <span style={{fontFamily:"cursive",width:"95%",margin:"auto"}} className="badge rounded-pill text-bg-danger discount-badge my-2">{book.discount} % off</span>
            <ul style={{listStyleType:"none"}} className="list-group list-group-flush">
              <li className="list-group-item desc-li">
                <p>{book.description}</p>
              </li>
              <li className="list-group-items mx-3 my-2 tag-li">
              <span className='price'><FaIndianRupeeSign style={{fontSize:"0.8rem"}}/>{book.price}/-</span>
              <span style={{fontFamily:"initial"}} className="badge text-bg-primary">{book.category}</span>
              </li>    
            </ul>            
          </div>

    
    </>
  )
}
