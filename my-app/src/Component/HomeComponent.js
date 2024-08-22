import React from 'react'
import Home from './Home/Home'
import Educations from './Education/Educations'
import Service from './services/Service'
import Projact from './projact/Projact'
import Contact from './contact/Contact'

function HomeComponent() {
  return (
    <>
        <Home/>
        <Educations/>
        <Service/>
        <Projact/>
        <Contact/>
</>
  )
}

export default HomeComponent