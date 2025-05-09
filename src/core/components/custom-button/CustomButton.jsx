import { usePalette } from '../../palette-context/PaletteContext';

const CustomButton = ({ color }) => {
    const { includesColor, addColor, removeColor, palette } = usePalette();

    const ADD = 'ADD TO CUSTOM PALETTE';
    const REMOVE = 'REMOVE FROM CUSTOM PALETTE';

    const addIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" >
            <path d="M12 4V20" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M4 12H20" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    )

    const removeIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" color="#000000" fill="none">
            <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    )

    const selected = () => {
        return includesColor(color);
    }

    function handleClick() {
        if (palette.length >= 5 && !selected()) return

        if (selected()) removeColor(color);
        else addColor(color);
    }

    return (
        <div
            className='tooltip fade icon add-icon'
            onClick={handleClick}
            data-title={selected() ? REMOVE : ADD}
            role="button"
        >
            {
                selected()
                    ? removeIcon
                    : addIcon
            }
        </div>
    )
}

export default CustomButton