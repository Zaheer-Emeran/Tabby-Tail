import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import header__cat from '../../assets/tabby_tail__header-content__cat1.jpg';

const Header = () => {
  return (
    <div className="tabby_tail__header section__padding" id="home">
      <div className="tabby_tail__header-content">
        <h1 className="gradient__text"> 
            This is some cute and creative text that has the words Tabby Tail in it.
        </h1>

        <p>This is some temp text that will be changed as the website progresses. This is some temp text that will be changed as the website progresses.</p>

        <div className="tabby_tail__header-content__input">
            <input type="email" placeholder='Your Email Address' />
            <button type="button">Get Started</button>

        </div>

        <div className='tabby_tail__header-content__people'>
          <img src={people} alt="people"/>
          <p>   
            This is probably the amount of people with accounts or something?
          </p>
        </div>

        <div className='tabbyT_tail__header-image'>
        <img src={header__cat} alt="neko"/>
        </div>

      </div>
    </div>
  )
}

export default Header
