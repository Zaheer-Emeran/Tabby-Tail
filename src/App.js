import React from 'react'

import {Footer , Blog , Please_Work, WhatPortfolio , Header} from './containers' ;
import {CTA, Brand, Navbar} from './components';
import './App.css';
import './index.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        
      </div>
      {/*<Brand />
      <WhatPortfolio />*/}
      <Please_Work />
      <CTA />
      <Blog />
      <Footer />

    </div>
  )
}

export default App
