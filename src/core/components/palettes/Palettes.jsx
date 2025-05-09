import './palettes.css'
import Palette from '../palette/Palette'
import {
    getAnalogousHarmony, getAnalogousPalette, getComplementaryHSL, getDarkerPalette, getShades,
    getSmoothedAnalogous, getTriadHSLFirstColor, getTriadHSLSecondColor
} from '../../../utils'
import CustomPalette from '../custom-palette/CustomPalette';

const Palettes = ({ color }) => {

    const SHADES = getShades(color);
    const COMPLEMENTARY = getComplementaryHSL(color);
    const TRIAD_COLOR_1 = getTriadHSLFirstColor(color);
    const TRIAD_COLOR_2 = getTriadHSLSecondColor(color);
    const DARKER = getDarkerPalette(color);
    const ANALOGOUS = getAnalogousPalette(color);
    const ANALOGOUS_HARMONY = getAnalogousHarmony(color);
    const SMOOTHED_ANALOGOUS = getSmoothedAnalogous(color);
    const SUGGESTED = [[
        DARKER[2],
        SHADES[0],
        ANALOGOUS_HARMONY[0],
        DARKER[0],
        TRIAD_COLOR_1[3],
    ], [
        SHADES[0],
        DARKER[2],
        TRIAD_COLOR_1[3],
        DARKER[0],
        ANALOGOUS_HARMONY[0],
    ]]

    const randomSuggestedPalette = SUGGESTED[Math.floor(Math.random() * SUGGESTED.length)]

    const palettes = {
        'SHADES': SHADES,
        'COMPLEMENTARY': COMPLEMENTARY,
        'TRIAD_COLOR_1': TRIAD_COLOR_1,
        'TRIAD_COLOR_2': TRIAD_COLOR_2,
        'DARKER': DARKER,
        'ANALOGOUS': ANALOGOUS,
        'ANALOGOUS_HARMONY': ANALOGOUS_HARMONY,
        'SMOOTHED_ANALOGOUS': SMOOTHED_ANALOGOUS,
        'SUGGESTED': randomSuggestedPalette,
    }

    return (
        <div className="palettes">
            {
                Object.keys(palettes).map(key => <Palette title={key.replaceAll('_', ' ')} palette={palettes[key]} key={crypto.randomUUID()} />)
            }
            <CustomPalette suggested={randomSuggestedPalette} />
        </div>
    )
}

export default Palettes