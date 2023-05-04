import { useState } from 'react';
import { getRandomNumber } from './utils/getRandom';
import phrase from "./assets/phrases.json";
import Phrase from './components/Phrase/Phrase';
import Button from './components/Button/Button';
import space1 from "./assets/space1.jpg";
import space2 from "./assets/space2.jpg";
import './App.css';

const backgrounds = [space1, space2, "/space3.jpg", "/space4.jpg"];

function App() {
  const getRandomPhrase= () => phrase[getRandomNumber(phrase.length -1)];
  const getRandomBackground = () => 
      backgrounds[getRandomNumber(backgrounds.length -1)]
  const [phraseObject, setphraseObject] = useState(getRandomPhrase()) 
  const [background, setbackground] = useState(getRandomBackground())
   
 const changePhrase = () => {
    let newPhrase = getRandomPhrase ();

    while (newPhrase.phrase === phraseObject.phrase) {
      newPhrase = getRandomPhrase();
    }
    setphraseObject(newPhrase);  
 };

  const changeBackground = () => {
    let newBackground = getRandomBackground ();

    while (newBackground === background) {
      newBackground = getRandomBackground();
    }
    setbackground(newBackground);
  };

  const handlerClick = () => {
    changePhrase();
    changeBackground();
  }

  return (
    <div 
      className='container_app' 
      style={{backgroundImage: `url("${background}")`}}
      >
      <h1 className='container_title'>THE GALAX</h1>
      <Phrase phrase={phraseObject.phrase}/>
      <p>
        author: <mark>{phraseObject.author}</mark>
      </p>
      <div className='btn_container'>
        <Button handlerClick={handlerClick}/> 
      </div>
   </div>
  )
}

export default App;