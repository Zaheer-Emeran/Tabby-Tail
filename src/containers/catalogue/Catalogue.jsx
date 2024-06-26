import React from 'react';
import './catalogue.css';
import CTA from '../../components/cta/CTA';
import paws_activity_level from '../../assets/paws-activity_level.png'
import paws_illness_level from '../../assets/paws-illness_level.png'
import paws_hygiene_level from '../../assets/paws-hygiene_needs_level.png'
import paws_playfulness_level from '../../assets/paws-playfulness_level.png'
import paws_affection_level from '../../assets/paws-affection_level.png'
import paws_exercise_level from '../../assets/paws-exercise_level.png'

const featuresData = [
    {
      title: 'This is a very detailed title hey?',
      text: 'This is a very detailed and descriptive text that accurately describes the above title...surely',
      activity_Level: 3, 
      illness_Prone: 7,
      hygiene: 6,
      playfullness: 3,
      affection:10,
      exercise_Needs:3
    
    },

/*
    {
      cat_Name: 'This is a very detailed title hey?',
      Img: 'img.src blah blah blah'
      activity_Level: 4
      illness_Prone: 7
      hygiene: 6
      playfullness: 3
      affection:10
      exercise_Needs:3

    },*/
  ];

const Catalogue = () => {
  const activityLevel = featuresData[0].activity_Level;



  const gradientPercentage = `${activityLevel * 10}%`; // Convert to percentage (assuming activity_Level is from 1 to 10)
  
  
  const gradientStyle = {
    width: '100%',
    height: '100%',
    background: `linear-gradient(to right, rgba(255, 255, 255, 0) ${gradientPercentage}, rgba(125, 85, 74, 1) ${gradientPercentage}), url(${paws_activity_level})`,
    backgroundSize: 'cover', // Adjust as necessary
    backgroundRepeat: 'no-repeat', // Prevents tiling of the background image
    backgroundPosition: 'right' // Aligns the image to the right
  }






  return (
    <div>
    <div className="tabby_tail__features-container">
        {featuresData.map((item, index) => (
        <CTA title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>



    <div className='dummy_class'>
      <div className='alpha-gradient' style={gradientStyle}></div>
    </div>  


    </div>
  )
}

export default Catalogue