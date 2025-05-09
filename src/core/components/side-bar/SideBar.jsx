import './side_bar.css'
import ColorBlock from '../color-block/ColorBlock';
import ToggleSwitch from '../toggle-switch/ToggleSwitch';
import InputColor from '../input-color/InputColor';
import RandomButton from '../random-button/RandomButton';
import image from '../../../assets/logo.jpg';
import { getRandomColor, hexToHSL, hslToHex } from '../../../utils';
import { useState } from 'react';


const SideBar = ({ color, updateColor }) => {
    const [inputColor, setInputColor] = useState(hslToHex(color));

    function onChange(e) {
        e.target.default;

        const input = e.target.value;

        const isValid = /^#?[0-9A-Fa-f]*$/.test(input);

        if (isValid) {
            updateColor(hexToHSL(input));
        }

        setInputColor(input);
    }

    function handleClick() {
        const randomColor = getRandomColor();

        setInputColor(hslToHex(randomColor));

        updateColor(randomColor)
    }

    return (
        <div className="side-bar-container">
            <div className="logo">
                <img src={image} alt="logo" className="img-logo" />
            </div>

            <InputColor onChange={onChange} value={inputColor} />

            <RandomButton handleClick={handleClick} />

            <div className="color-block">
                <ColorBlock color={color} />
            </div>

            <ToggleSwitch />
        </div>
    )
}

export default SideBar