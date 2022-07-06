import logo from '../../assets/images/smile.svg'
import './Header.css'
const Header = () => {
  return (
    <header>
      <img src={logo} alt='White smiley face with dollar signs for eyes' />
      <p className='title'>A MONEY CO</p>
    </header>
  )
}

export default Header
