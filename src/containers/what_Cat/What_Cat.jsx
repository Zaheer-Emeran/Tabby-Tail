import React from 'react';
import './what_Cat.css';
import Feature from '../../components/feature/feature'

const What_Cat = () => {
  return (
    <div className='tabby_Tail__what_Cat section__margin' id='what_Cat'>
      <div className='tabby_tail__what_Cat-feature'>
        
       {/* <Feature title="Halloo" text="This is additional text that proceeds the previous text"/>*/}
       
          
      </div>

        <div className='tabby_Tail__what_Cat-heading'>
          <h1>
            Health and Wellness
          </h1>

          <p>
            This is generic dialogue that is a placeholder to provide a brief description of like, cats life cycle? Cause its going to be like,  <br></br>
            the kitten is between 0 and x-months, then after that its considered a teen cat, then an adult then finally a senior? Idk I'll figure<br></br>
            it out. Imma copy this a couple times.

          </p>

          <p>
            <br></br>
            This is generic dialogue that is a placeholder to provide a brief description of like, cats life cycle? Cause its going to be like,  <br></br>
            the kitten is between 0 and x-months, then after that its considered a teen cat, then an adult then finally a senior? Idk I'll figure<br></br>
            it out. Imma copy this a couple times.

          </p>

          <h4>
            Click Here To Find Out More!
          </h4> 
        </div>

        
    

        <div className='tabby_Tail__what_Cat-container'>
          <Feature 
            title="Kitten Corner" 
            text="This is some text that is describing Kitten Corner.
            This is some text that is describing Kitten Corner.
            This is some text that is describing Kitten Corner.
            This is some text that is describing Kitten Corner.
            This is some text that is describing Kitten Corner.
            This is some text that is describing Kitten Corner.
            This is some text that is describing Kitten Corner.
            "
          />

          <Feature 
            title="Cat Safety" 
            text="This text is here to give a general description in 
            a sense for the way to raise cats in between kitten and senior.
            This text is here to give a general description in 
            a sense for the way to raise cats in between kitten and senior.
            This text is here to give a general description in 
            a sense for the way to raise cats in between kitten and senior.
            "
          />

          <Feature 
            title="Senior Cat-izens" 
            text="This last text is here to provide a mini-description 
            for how to look after senior catz.
            This last text is here to provide a mini-description 
            for how to look after senior catz.
            This last text is here to provide a mini-description 
            for how to look after senior catz.
            "
          />
          
          
        </div>
        
    </div>
  )
}



export default What_Cat
