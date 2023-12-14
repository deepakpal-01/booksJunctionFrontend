import { createContext, useContext,useState } from "react";

//context created
const BookContext=createContext()

//context provider
const BookProvider=(props)=>{

    // const host="http://127.0.0.1:4000"
    const host="https://booksjunctionserver.onrender.com"

    const booksInitial=[]

    const [booksArr, setBooksArr] = useState(booksInitial)

    const authtoken=localStorage.getItem('authtoken')

     const getAllBooks=async()=>{
      if(authtoken===null) return;
      const response = await fetch(`${host}/books/getallbooks`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":`${authtoken}`
        },
      });
      const data=await response.json()
      setBooksArr(data.response)
    }

    const addBook=async(title,description,category,price,discount)=>{
        //post api at /api/notes/addnote with auth-token in header and data in body and it will return the new note
        const response = await fetch(`${host}/books/addbook`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token":`${authtoken}`
          },
          body: JSON.stringify({
            title:title,
            description:description,
            category:category,
            price:price,
            discount:discount
          })
        });
        // eslint-disable-next-line
        const data=await response.json()
        console.log(data)
    }

    let editStates={
        id:null,
        title:"",
        description:"",
        category:"",
        price:"",
        discount:""
    }
    const updateFields=(id,title,description,category,price,discount)=>{
    
      if(id) editStates.id=id
      if(title) editStates.title=title
      if(description) editStates.description=description
      if(category) editStates.category=category
      if(price) editStates.price=price
      if(discount) editStates.discount=discount
    }

    const editBook=async(bookid,title,description,category,price,discount)=>{
        const response = await fetch(`${host}/books/editbook/${bookid}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token":`${authtoken}`
          },
          body: JSON.stringify({
            title:title,
            description:description,
            category:category,
            price:price,
            discount:discount
          })
        });
        // eslint-disable-next-line
        const data=await response.json()
        // console.log(data,"note return by backend")
      }

    const deleteBook=async(id)=>{
        //delete api at /api/notes/deletenote:id  with auth-token in header and id within endpoint
  
        const response = await fetch(`${host}/books/deletebook/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token":`${authtoken}`
          },
        });
        // eslint-disable-next-line  
        const data=await response.json()
        // console.log(data)   
      }


    return (
        <BookContext.Provider value={{booksArr,getAllBooks,addBook,deleteBook,editStates,updateFields,editBook}}>
            {props.children}
        </BookContext.Provider>
    )
}


//custom hook
const useBookContext=()=>{
    return useContext(BookContext)
}

export {BookProvider,useBookContext}