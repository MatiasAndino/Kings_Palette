import './header.css';
import image from '../../../assets/logo.jpg';

const Header = () => {
    return (
        <div className='header-container'>
            <img src={image} alt="logo" className="logo" />
            <h1 className="title">KING'S PALETTE</h1>
        </div>
    )
}

export default Header