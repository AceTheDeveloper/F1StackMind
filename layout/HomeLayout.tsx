
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../pages/Header'
import Footer from '../pages/Footer'
import { Toaster } from 'react-hot-toast'
import { ChatWidget } from '../components/ChatWidget'
import AOS from 'aos'

function HomeLayout () {

  const location = useLocation();

  useEffect(() => {
    AOS.refresh()
  }, [location.pathname])

  return (
    <div>
      <Toaster position="top-right" />

      <Header/>
        <Outlet />
        <ChatWidget />
      <Footer />
    </div>
  )
}

export default HomeLayout