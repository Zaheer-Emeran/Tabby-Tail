import React, {useState} from 'react';
import { RiMenuLine, RiCloseLin, RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/tabby_tail_logo.png'

//mobile responsiveness: 53:00 --> https://www.youtube.com/watch?v=F627pKNUCVQ


const Menu = () =>(
  <>
  <p> <a href="#home">Home</a></p>
  <p> <a href="#linkedIn">Cat Facts</a></p>
  <p> <a href="#linkedIn">Health And Wellness</a></p>
  <p> <a href="#linkedIn">Cat Mem</a></p>
  
  </>
)

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="tabby_tail__navbar">

      <div className="tabby_tail__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        
      <div className="tabby_tail__navbar-links">
        


      <div className='tabby_tail__navbar-links_container'>
       <Menu />
      </div>

      <div className='tabby_tail__navbar-sign'>
        <p>Sign In</p>
        <button type="button"> Sign Up </button>
      </div>

      <div className='tabby_tail__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="fff" size ={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="fff" size ={27} onClick={() => setToggleMenu(true)}/>
        
        }
        {toggleMenu &&(
          <div className='tabby_tail__navbar-menu_container scale-up-center'>
            <div className='tabby_tail__navbar-menu_container-links'>
              <Menu />
              <div className='tabby_tail__navbar-menu_container-links-sign'>
                <p>Sign In</p>
                <button type="button"> Sign Up </button>
                </div>
            </div>
          </div>
        )
        }
      </div>

      </div>    
    </div>
  )
}

export default Navbar
