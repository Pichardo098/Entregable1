const QuoteBox = ({quote, bgInfo_Button}) => {

  return (
    <p id="principalPhrase" className={bgInfo_Button}>
      {quote.phrase} <br />
      <b className="font_phrase">Fuente: {quote.author}</b>
    </p>
  )
}

export default QuoteBox