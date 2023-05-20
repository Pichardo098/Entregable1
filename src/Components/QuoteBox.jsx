const QuoteBox = ({quote}) => {

  return (
    <p id="principalPhrase">
      {quote.phrase} <br />
      <b>Fuente: {quote.author}</b>
    </p>
  )
}

export default QuoteBox