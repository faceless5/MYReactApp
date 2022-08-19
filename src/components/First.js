import React from 'react'
import Nav from './Layout/Nav'
import Footer from './Layout/Footer'

const First = () => {
  return (
    <>
    <Nav/>
        <h1>
            This is the First page.
        </h1>
        <div>This is the <br/> content.</div>
        <Footer/>
    </>
  )
}

export default First