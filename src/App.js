import React from 'react'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import Top from './page/Top'
import Mylist from './page/Mylist'
import './App.css'


const App = () => {
  return (
    <div className="App">
      <Header />

      <Route exact path="/" component={Top} />
      <Route path="/mylist" component={Mylist} />
    </div>
  )
}

export default App
