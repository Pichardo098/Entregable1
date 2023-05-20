import { useState } from 'react'
import './App.css'
import dbQuotes from './db/quote.json'
import {getRandom} from './utils/random'
import QuoteBox from './Components/QuoteBox'
import Button from './Components/Button'


const bkgImages = [
  {
    "Space":'space1',
    "planet": '../public/PlanetSvg/planeta1.svg'
  },
  {
    "Space":'space2' ,
    "planet": '../public/PlanetSvg/planeta2.svg',
  },
  {
    "Space":'space4',
    "planet": '../public/PlanetSvg/planeta3.svg' ,
  },
  {
    "Space": 'space4'  ,
    "planet": '../public/PlanetSvg/planeta4.svg',
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
        <QuoteBox quote={quote}/>
        <button onClick={handleChangeQuote} id='buton_change_Info'>Change Info</button>

        <footer>
          <div>
            <img src={bgImages.planet} alt="planeta" />
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
