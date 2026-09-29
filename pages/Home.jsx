

import React from 'react'
import Hero from '../pages/Hero'
import About from '../pages/About'
import MV from '../pages/MV'
import Events from '../pages/Events'
import Advisers from '../pages/Advisers'
import Officers from '../pages/Officers'
import JoinForm from '../pages/JoinForm'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <MV />
      <Events />
      <Advisers />
      <Officers />
      <JoinForm />
    </>
  )
}

export default Home