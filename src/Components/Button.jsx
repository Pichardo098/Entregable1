import { FaRedoAlt } from 'react-icons/fa';

const Button = ({handleChangeQuote, bgInfo_Button}) => {

  return (
    <>
      <button onClick={handleChangeQuote} id='buton_change_Info' className={bgInfo_Button}> <FaRedoAlt /> </button>
    </>
  )
}

export default Button