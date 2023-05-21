import { useState } from 'react'
import './App.css'
import dbQuotes from './db/quote.json'
import {getRandom} from './utils/random'
import QuoteBox from './Components/QuoteBox'
import Button from './Components/Button'
import Footer from './Components/Footer'



const bkgImages = [
  {
    "Space":'space1',
    "planet": '../public/PlanetSvg/planeta1.svg',
    "bgInfo_Button": 'bgInfoButton1',
  },
  {
    "Space":'space2' ,
    "planet": '../public/PlanetSvg/planeta2.svg',
    "bgInfo_Button": 'bgInfoButton2',
  },
  {
    "Space":'space3',
    "planet": '../public/PlanetSvg/planeta3.svg' ,
    "bgInfo_Button": 'bgInfoButton3',
  },
  {
    "Space": 'space4'  ,
    "planet": '../public/PlanetSvg/planeta4.svg',
    "bgInfo_Button": 'bgInfoButton4',
  },
]
function App() {
  
  //Lógica Random Phrase
  const [quote, setQuote] = useState(getRandom(dbQuotes))
  const [bgImages, setBgIMages] = useState(getRandom(bkgImages))
  
  
  const handleChangeQuote = () => {
    setQuote(getRandom(dbQuotes))
    setBgIMages(getRandom(bkgImages))
  }
  
  return (
    <>
      <main className={bgImages.Space}>
        <h1 className='principal_title'>INFO GALAXY</h1>
        <QuoteBox quote={quote} bgInfo_Button={bgImages.bgInfo_Button}/>
        <Button handleChangeQuote={handleChangeQuote} bgInfo_Button={bgImages.bgInfo_Button}/>
        <Footer planet={bgImages.planet}/>
      </main>
    </>
  )
}

export default App
