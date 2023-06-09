import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Section from './Component/Section'
import Section2 from './Component/Section2'
import Section3 from './Component/Section3'
import Section4 from './Component/Section4'
import Section5 from './Component/Section5'
import Section6 from './Component/Section6'
import Footer from './Component/Footer'

function App() {

  return (
    <>
      <Header />
      <hr />
      <div className="container">
        <Section />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
      <Footer />

    </>
  )
}

export default App
