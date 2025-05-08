import { formatHSLString, getReadableForegroundColor, hslToHex } from '../../../utils';
import { usePalette } from '../../palette-context/PaletteContext';
import CustomButton from '../custom-button/CustomButton';
import './color_block.css';

const ColorBlock = ({ color }) => {
    const { currentColor } = usePalette();
    let selectedColor = color === undefined ? currentColor : color;

    const specialColor = formatHSLString(getReadableForegroundColor(selectedColor));
    const hexColor = hslToHex(selectedColor);

    const copyIcon = (
        <svg viewBox="0 0 448 512">
            <path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z" />
        </svg>
    );

    const blockStyle = {
        'color': specialColor,
        'backgroundColor': formatHSLString(selectedColor),
        '--button-color': specialColor,
    };

    function copyHexColor() {
        navigator.clipboard.writeText(hexColor.replace('#', ''));
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
            <CustomButton color={selectedColor} />
        </div>
    )
}

export default ColorBlock