import { useState } from 'react';
import { formatHSLString, getReadableForegroundColor, hslToHex } from '../../../utils';
import { usePalette } from '../../palette-context/PaletteContext';
import './color_block.css';

const ColorBlock = ({ color }) => {

    const specialColor = formatHSLString(getReadableForegroundColor(color));
    const hexColor = hslToHex(color);
    const { includesColor, addColor, removeColor } = usePalette();
    const [isSelected, setIsSelected] = useState(includesColor(color));

    const copyIcon = (
        <svg viewBox="0 0 448 512">
            <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" />
        </svg>
    )

    const addIcon = (
        <svg viewBox="0 0 448 512">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
        </svg>
    )

    const removeIcon = (
        <svg viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
    )

    const blockStyle = {
        'color': specialColor,
        'backgroundColor': formatHSLString(color),
        '--button-color': specialColor,
    }

    function copyHexColor() {
        navigator.clipboard.writeText(hexColor);
    }

    function handleClick() {
        if (isSelected) removeColor(color);
        else addColor(color);

        setIsSelected(prev => !prev);
    }


    return (
        <div
            className='block-color'
            style={blockStyle}
        >
            <p>{hexColor}</p>
            <div
                className='tooltip fade icon copy-icon'
                onClick={copyHexColor}
                data-title="COPY HEX"
                role="button"
            >
                {copyIcon}
            </div>
            <div
                className='tooltip fade icon add-icon'
                onClick={handleClick}
                data-title={isSelected ? 'REMOVE FROM CUSTOM PALETTE' : 'ADD TO CUSTOM PALETTE'}
                role="button"
            >
                {
                    isSelected
                    ? removeIcon
                    : addIcon
                }
            </div>
        </div>
    )
}

export default ColorBlock