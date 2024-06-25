import React from 'react';
import './features.css';
import Feature from '../../components/feature/feature';

const featuresData = [
  {
    title: 'This is a very detailed title hey?',
    text: 'This is a very detailed and descriptive text that accurately describes the above title...surely'
  },
  {
    title: 'This as well is a very detailed title',
    text: 'This is a very detailed and descriptive text that accurately describes the above title...surely'
  },
  {
    title: 'But what if i told you, this is also really detailed.',
    text: 'This is a very detailed and descriptive text that accurately describes the above title...surely'
  },
  {
    title: 'Nah, I lied - none of these are actually detailed... OR IS IT?!',
    text: 'This is a very detailed and descriptive text that accurately describes the above title...surely'
  },
  
];

const Features = () => {
  return (
    <div className='tabby_tail__features section_padding' id='features'>
      <div className='tabby_tail__features-heading'>
        <h1 className='gradient__text_light'>
            This is temp text that's probably gonna intro the reasoning behind me making this website
        </h1>

        <p>
          This is clickable text.. surely
        </p>
      
        </div>
        <div className="tabby_tail__features-container">
        {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
      
    </div>
  )
}

export default Features
