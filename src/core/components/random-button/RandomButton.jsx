import { getRandomColor, hslToHex } from '../../../utils';
import { usePalette } from '../../palette-context/PaletteContext';
import './random_button.css';

const RandomButton = ({ inputRef }) => {

    const { updateCurrentColor } = usePalette()

    function handleClick() {
        const randomColor = getRandomColor();
        updateCurrentColor(randomColor);

        if (inputRef.current) inputRef.current.value = hslToHex(randomColor);

    }

    return (
        <button onClick={handleClick}>GENERATE RANDOM</button>
    )
}

export default RandomButton