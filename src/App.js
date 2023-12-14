import './App.css';
import { useState } from 'react';
import Books from './Components/Books';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Login from './Components/Login';
import AddBook from './Components/AddBook';
import EditBook from './Components/EditBook';
import SignUp from './Components/SignUp';
import NavBar from './Components/NavBar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Footer from './Components/Footer';
import { GlobalStyle } from './Components/GlobalStyles';
import Alert from './Components/Alert';
import { BookProvider } from './Components/Context/BookContext';

function App() {

  const [alert, setAlert] = useState(null)

  function showAlert(message,type){
      setAlert({
        message:message,
        type:type
      })
      console.log("alert updated")
      setTimeout(()=>{
        setAlert(null)
      },2000)
  }

  const [progress,setProgress] = useState(0);

  return (
   <>
   <Router>
    <GlobalStyle/>
    <BookProvider>
    <NavBar progress={progress} setProgress={setProgress} showAlert={showAlert}/>
    <Alert alert={alert} />
    <Routes>
      <Route path='/' element={<Home setProgress={setProgress} showAlert={showAlert}/>}>
        <Route path='/login' element={<Login setProgress={setProgress} showAlert={showAlert}/>}/>
        <Route path='/signup' element={<SignUp setProgress={setProgress} showAlert={showAlert}/>}/>
        <Route path='/addbook' element={<AddBook setProgress={setProgress} showAlert={showAlert}/>}/>
      </Route>
      <Route path='/books' element={<Books progress={progress} setProgress={setProgress} showAlert={showAlert}/>}>
        <Route path='/books/addbook' element={<AddBook showAlert={showAlert}/>}/>
        <Route path='/books/editBook' element={<EditBook showAlert={showAlert}/>}/>
      </Route>
      <Route path='/contact' element={<Contact setProgress={setProgress} />}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </BookProvider>
    <Footer/>
    </Router>
   </>
  );
}

export default App;
