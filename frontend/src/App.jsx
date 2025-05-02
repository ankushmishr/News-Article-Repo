import React from 'react'
import { Button } from "@/components/ui/button"
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
// import { Route } from 'lucide-react'
import SignInForm from './auth/forms/SignInForm'
import SignUpForm from './auth/forms/SignUpForm'
import Home from './pages/Home'
import DashBoard from './pages/DashBoard'
import NewsArticles from './pages/NewsArticles'
import About from './pages/About'
import Header from './components/shared/Header'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='sign-in' element={<SignInForm/>}/>
      <Route path='sign-up' element={<SignUpForm/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<DashBoard/>}/>
      <Route path='/news' element={<NewsArticles/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
