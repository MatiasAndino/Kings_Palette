import './navbar.css';
// import logo from '../../../assets/imagen_2.png';

const Navbar = () => {
  return (
    <div className="bar">
      <div className="bar-container">
        <div className="logo">
          {/* <img src={logo} alt='logo' /> */}
        </div>
        <div className="links">
          <a href="#link">LINK</a>
          <a href="#link">LINK</a>
          <a href="#link">LINK</a>
          <a href="#link">LINK</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar