import { useState } from 'react';
import './side_bar.css'
import { getRandomHexColor, hexToHSL, hslToHex } from '../../../utils';
import ColorBlock from '../color-block/ColorBlock';

const SideBar = ({ fn }) => {

    const [inputColor, setInputColor] = useState('#E9C42F');

    function onChange(e) {
        e.target.default;

        const input = e.target.value;

        const isValid = /^#?[0-9A-Fa-f]*$/.test(input);

        if (isValid) {
            fn(hexToHSL(input));
        }

        setInputColor(input);
    }

    function handleClick() {
        const randomColor = getRandomHexColor();

        setInputColor(hslToHex(randomColor));
        fn(randomColor);
    }

    return (
        <div className="side-bar-container">

            <label htmlFor='input-color'>COLOR: </label>
            <input
                type='text'
                id='input-color'
                name='input-color'
                value={inputColor}
                className='input-color'
                onChange={e => onChange(e)}
                required
            />

            <button onClick={handleClick}>GENERATE RANDOM</button>

            <div className="color-block">
                <ColorBlock color={hexToHSL(inputColor)} />
            </div>
        </div>
    )
}

export default SideBar