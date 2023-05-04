import "./Button.css"

const Button = ({ handlerClick}) => {
  return (
    <button className="switch_btn" onClick={handlerClick}> 
        <i className='bx bx-refresh'></i>
    </button>
  )
}

export default Button