import './side_bar.css'
import ColorBlock from '../color-block/ColorBlock';
import ToggleSwitch from '../toggle-switch/ToggleSwitch';
import InputColor from '../input-color/InputColor';
import RandomButton from '../random-button/RandomButton';
import { useRef } from 'react';
import image from '../../../assets/logo.jpg';


const SideBar = () => {
    const inputRef = useRef();

    return (
        <div className="side-bar-container">
            <div className="logo">
                <img src={image} alt="logo" className="img-logo" />
            </div>

            <InputColor inputRef={inputRef} />

            <RandomButton inputRef={inputRef} />

            <div className="color-block">
                <ColorBlock />
            </div>

            <ToggleSwitch />
        </div>
    )
}

export default SideBar