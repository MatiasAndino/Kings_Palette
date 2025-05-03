import { useState } from 'react';
import './homeview.css';

import {
    evaluateTonalScale,
    getAnalogousHarmony, getAnalogousPalette, getComplementaryHSL, getDarkerColor, getRandomHexColor, getShades,
    getSmoothedAnalogous, getTriadHSL, getTriadHSLFirstColor, getTriadHSLSecondColor,
    hexToHSL, hslToHex
} from '../../../utils';

const HomeView = () => {

    const [inputColor, setInputColor] = useState('#0099ff');
    const COLOR = hexToHSL(inputColor);
    const [colorHSL, setColorHSL] = useState(COLOR);

    function onChange(e) {
        e.target.default;

        const input = e.target.value;

        const isValid = /^#?[0-9A-Fa-f]*$/.test(input);

        if (isValid) {
            setColorHSL(hexToHSL(input));
        }

        setInputColor(input);
    }

    function setColors(func) {
        const colors = func(colorHSL);

        return colors.map(color => {
            const [h, s, l] = color;
            const backgroundColor = `HSL(${h},${s}%,${l}%)`;
            return <div className='block-color' style={{ 'backgroundColor': backgroundColor }}><p>{hslToHex([h, s, l])}</p></div>
        });
    }

    function handleClick() {
        const randomColor = getRandomHexColor();

        setInputColor(hslToHex(randomColor));
        setColorHSL(randomColor);
    }



    return (
        <div className='container'>

            <div className="elements">
                <div className="left-side">
                    <div className="palette">
                        {setColors(getShades).map(item => item)}
                    </div>
                    <div className="palette">
                        {setColors(getTriadHSLFirstColor).map(item => item)}
                    </div>
                    <div className="palette">
                        {setColors(getTriadHSLSecondColor).map(item => item)}
                    </div>
                    <div className="palette">
                        {setColors(getComplementaryHSL).map(item => item)}
                    </div>
                </div>
                <div className="middle-side">
                    <div className="palette">
                        {setColors(getAnalogousPalette).map(item => item)}
                    </div>
                    <div className="palette">
                        {setColors(getAnalogousHarmony).map(item => item)}
                    </div>
                    <div className="palette">
                        {setColors(getSmoothedAnalogous).map(item => item)}
                    </div>
                    <div className="palette">
                        {setColors(getDarkerColor).map(item => item)}
                    </div>
                </div>
                <div className="right-side">

                    <label htmlFor='input-color'>Color: </label>
                    <input
                        type='text'
                        id='input-color'
                        name='input-color'
                        value={inputColor}
                        className='input-color'
                        // style={{ 'backgroundColor': inputColor }}
                        onChange={e => onChange(e)}
                        required
                    />

                    <button onClick={handleClick}>RANDOM COLOR</button>
                    <div className="palette" id='current-color'>
                        {setColors((color) => [color]).map(item => item)}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeView;