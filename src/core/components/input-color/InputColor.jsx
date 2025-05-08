import { useState } from 'react';
import { hexToHSL, hslToHex } from '../../../utils';
import { usePalette } from '../../palette-context/PaletteContext';
import { DEFAULT_COLOR } from '../../../utils/colorUtils';

const InputColor = ({ inputRef }) => {
    const { updateCurrentColor } = usePalette();
    const [inputColor, setInputColor] = useState(hslToHex(DEFAULT_COLOR));

    function onChange(e) {
        e.target.default;

        const input = e.target.value;

        const isValid = /^#?[0-9A-Fa-f]*$/.test(input);

        if (isValid) {
            updateCurrentColor(hexToHSL(input));
        }
        setInputColor(input);

    }

    return (
        <>
            <label htmlFor='input-color'>COLOR: </label>
            <input
                ref={inputRef}
                type='text'
                id='input-color'
                name='input-color'
                value={ inputColor}
                className='input-color'
                onChange={e => onChange(e)}
                required
            />
        </>
    )
}

export default InputColor