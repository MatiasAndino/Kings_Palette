import './palettes.css'
import Palette from '../palette/Palette'
import {
    getAnalogousHarmony, getAnalogousPalette, getComplementaryHSL, getDarkerPalette, getShades,
    getSmoothedAnalogous, getTriadHSLFirstColor, getTriadHSLSecondColor
} from '../../../utils'
import { usePalette } from '../../palette-context/PaletteContext';

const Palettes = () => {
    const { palette, currentColor, updateAutoPalette } = usePalette();

    const SHADES = getShades(currentColor);
    const COMPLEMENTARY = getComplementaryHSL(currentColor);
    const TRIAD_COLOR_1 = getTriadHSLFirstColor(currentColor);
    const TRIAD_COLOR_2 = getTriadHSLSecondColor(currentColor);
    const DARKER = getDarkerPalette(currentColor);
    const ANALOGOUS = getAnalogousPalette(currentColor);
    const ANALOGOUS_HARMONY = getAnalogousHarmony(currentColor);
    const SMOOTHED_ANALOGOUS = getSmoothedAnalogous(currentColor);
    const RECOMMENDED = [
        DARKER[2],
        SHADES[0],
        ANALOGOUS_HARMONY[0],
        DARKER[0],
        TRIAD_COLOR_1[3],
    ]
    // const RECOMMENDED = [[
    //     DARKER[2],
    //     SHADES[0],
    //     ANALOGOUS_HARMONY[0],
    //     DARKER[0],
    //     TRIAD_COLOR_1[3],
    // ], [
    //     SHADES[0],
    //     DARKER[2],
    //     TRIAD_COLOR_1[3],
    //     DARKER[0],
    //     ANALOGOUS_HARMONY[0],
    // ]]

    // const randomRecommendedPalette = RECOMMENDED[Math.floor(Math.random() * RECOMMENDED.length)]

    const palettes = {
        'SHADES': SHADES,
        'COMPLEMENTARY': COMPLEMENTARY,
        'TRIAD_COLOR_1': TRIAD_COLOR_1,
        'TRIAD_COLOR_2': TRIAD_COLOR_2,
        'DARKER': DARKER,
        'ANALOGOUS': ANALOGOUS,
        'ANALOGOUS_HARMONY': ANALOGOUS_HARMONY,
        'SMOOTHED_ANALOGOUS': SMOOTHED_ANALOGOUS,
        'RECOMMENDED': RECOMMENDED,
        'CUSTOM': palette,
    }
    updateAutoPalette(RECOMMENDED);


    return (
        <div className="palettes">
            {
                Object.keys(palettes).map(key => <Palette title={key.replaceAll('_', ' ')} palette={palettes[key]} key={crypto.randomUUID()} />)
            }
        </div>
    )
}

export default Palettes