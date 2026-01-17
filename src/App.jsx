
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import LoginPage from './pages/login'
import SignUpPage from './pages/signin'
import Header from './components/header'
import AdminPage from './pages/adminPage'
import TestPage from './pages/testPage'
import { Toaster } from 'react-hot-toast'

function App() {
  

  return (
    <BrowserRouter>
      <div>
        <Toaster position='top-center'/>
        <Routes path="/*">
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/> 
          <Route path="/*" element={<h1>404 Not Found</h1>}/>
          <Route path="/admin/*" element={<AdminPage/>}/>
          <Route path="/testing" element={<TestPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
