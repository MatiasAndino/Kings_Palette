import { useState } from 'react';
import './homeview.css';

import { hexToHSL } from '../../../utils';
import Palettes from '../../../core/components/palettes/Palettes';
import SideBar from '../../../core/components/side-bar/SideBar';
import Palette from '../../../core/components/palette/Palette';
import { usePalette } from '../../../core/palette-context/PaletteContext';

const HomeView = () => {

    const COLOR = hexToHSL('#E9C42F');
    const [colorHSL, setColorHSL] = useState(COLOR);
    const { palette } = usePalette();

    function setColor(color) {
        setColorHSL(color)
    }

    return (
        <div className="container">
            <div className="header">HEADER</div>
            <div className="side-bar">
                <SideBar fn={setColor} />
            </div>
            <div className="main-content">
                <section>
                    <Palettes color={colorHSL} />
                </section>
                <section>
                    {/* <Palette title='CUSTOM' palette={[[0, 0, 0], [0, 100, 100], [0, 0, 0], [0, 100, 100], [0, 0, 0], [0, 100, 100],]} isCustom={'perro'} /> */}
                    <Palette title='CUSTOM' palette={palette} isCustom={true} />
                </section>
            </div>
            <div className="footer">FOOTER</div>
        </div>

    )
}

export default HomeView;