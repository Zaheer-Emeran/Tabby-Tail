import React from 'react'

import {Footer , Blog , Please_Work, What_Cat , Header , Catalogue} from './containers' ;
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
      {/*<Brand />*/}
      <What_Cat />
      <Please_Work />
      <Catalogue />
      <Blog />
      <Footer />

    </div>
  )
}

export default App
