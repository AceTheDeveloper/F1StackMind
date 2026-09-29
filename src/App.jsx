
import { useEffect } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomeLayout from "../layout/HomeLayout"
import Home from "../pages/Home"
import Members from "../pages/Members"
import AOS from 'aos'
import 'aos/dist/aos.css'

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/members', element: <Members /> }
    ]
  }
])

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return <RouterProvider router={router} />
}

export default App