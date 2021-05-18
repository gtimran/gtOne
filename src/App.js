import React from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import { Route } from 'react-router'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
    </>
  )
}

export default App
