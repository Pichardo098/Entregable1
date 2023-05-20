import { useState } from 'react'
import './App.css'
import dbQuotes from './db/quote.json'
import {getRandom} from './utils/random'
import QuoteBox from './Components/QuoteBox'
import Button from './Components/Button'

import Space1 from '../public/SpaceImg/Space1.jpg'
import Space2 from '../public/SpaceImg/Space2.jpg'
import Space3 from '../public/SpaceImg/Space3.jpg'
import Space4 from '../public/SpaceImg/Space4.jpg'


function App() {
  
  //Lógica Random Phrase
  const [quote, setQuote] = useState(getRandom(dbQuotes))

  

  const handleChangeQuote = () => {
    setQuote(getRandom(dbQuotes))
  }

  return (
    <>
      <main style={{backgroundImage: `url(../public/SpaceImg/Space1.jpg)`}}>
        <h1 className='principal_title'>INFO GALAXY</h1>
        <QuoteBox quote={quote} handleChangeQuote={handleChangeQuote} />
        <Button handleChangeQuote={handleChangeQuote}/>

        <footer>
          
        </footer>
      </main>
    </>
  )
}

export default App
