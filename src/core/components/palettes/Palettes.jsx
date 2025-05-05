import './palettes.css'
import Palette from '../palette/Palette'
import {
    getAnalogousHarmony, getAnalogousPalette, getComplementaryHSL,
    getDarkerPalette, getPalette, getShades,
    getSmoothedAnalogous, getTriadHSLFirstColor, getTriadHSLSecondColor
} from '../../../utils'

const Palettes = ({ color }) => {
    return (
        <div className="palettes">
            <Palette title='SHADES' palette={getPalette(getShades, color)} />
            <Palette title='COMPLEMENTARY' palette={getPalette(getComplementaryHSL, color)} />
            <Palette title='TRIAD COLOR 1' palette={getPalette(getTriadHSLFirstColor, color)} />
            <Palette title='TRIAD COLOR 2' palette={getPalette(getTriadHSLSecondColor, color)} />
            <Palette title='DARKER' palette={getPalette(getDarkerPalette, color)} />
            <Palette title='ANALOGOUS' palette={getPalette(getAnalogousPalette, color)} />
            <Palette title='ANALOGOUS HARMONY' palette={getPalette(getAnalogousHarmony, color)} />
            <Palette title='SMOOTHED ANALOGOUS' palette={getPalette(getSmoothedAnalogous, color)} />
        </div>
    )
}

export default Palettes