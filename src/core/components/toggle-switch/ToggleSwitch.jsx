import { usePalette } from '../../palette-context/PaletteContext';
import './toggle_switch.css';

const ToggleSwitch = () => {

    const { switchPalettes } = usePalette();

    function handleClick() {
        switchPalettes();
    }

    return (
        <label className="toggle">
            <input type="checkbox" onClick={handleClick} />
            <span className="slider">
                <span className="label-text"></span>
                <span className="circle"></span>
            </span>
        </label>


    )
}

export default ToggleSwitch