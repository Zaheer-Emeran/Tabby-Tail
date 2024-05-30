import React, {useState} from 'react';
import { RiMenuLine, RiCloseLin, RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/logo_p1.png'

//mobile responsiveness: 53:00 --> https://www.youtube.com/watch?v=F627pKNUCVQ

const Menu = () =>(
  <>
  <p> <a href="#home">Home</a></p>
  <p> <a href="#linkedIn">Page 2</a></p>
  <p> <a href="#linkedIn">Page 3</a></p>
  <p> <a href="#linkedIn">Page 4</a></p>
  <p> <a href="#linkedIn">Page 5</a></p>
  <p> <a href="#linkedIn">Page 6</a></p>
  </>
)

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="project_I__navbar">
      <div className="project_I__navbar-links">
        <div className="project_I__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>


      <div className='project_I__navbar-links_container'>
       <Menu />
      </div>

      <div className='project_I__navbar-sign'>
        <p>Sign In</p>
        <button type="button"> Sign Up </button>
      </div>

      <div className='project_I__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="fff" size ={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="fff" size ={27} onClick={() => setToggleMenu(true)}/>
        
        }
        {toggleMenu &&(
          <div className='project_I__navbar-menu_container scale-up-center'>
            <div className='project_I__navbar-menu_container-links'>
              <Menu />
              <div className='project_I__navbar-menu_container-links-sign'>
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
