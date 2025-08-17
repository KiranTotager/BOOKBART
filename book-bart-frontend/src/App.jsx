import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import BookCard from './components/BookCard'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import BartBook from './components/BartBook'
import { Provider } from 'react-redux'
import store from './ReduxToolKit/storeConfiguration'
function App() {


  return (
   <Provider store={store}>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/sell' element={<BartBook/>}/>
    </Routes>
    </BrowserRouter>
   </Provider>

  )
}

export default App
