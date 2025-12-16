import React, { useEffect } from 'react'
import Header from '../pages/Header'
import Hero from '../pages/Hero'
import About from '../pages/About'
import MV from '../pages/MV'
import Events from '../pages/Events'
import Advisers from '../pages/Advisers'
import Officers from '../pages/Officers'
import JoinForm from '../pages/JoinForm'
import Footer from '../pages/Footer'
import { Toaster } from 'react-hot-toast'
function App() {



  return (
    <>
    <Toaster position="top-right" />

    <Header/>
        <Hero />
        <About />
        <MV />
        <Events />
        <Advisers />
        <Officers />
        <JoinForm />
    <Footer />

    </>
  )
}

export default App