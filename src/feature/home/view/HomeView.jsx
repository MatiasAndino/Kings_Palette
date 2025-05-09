import './homeview.css';
import SideBar from '../../../core/components/side-bar/SideBar';
import PreviewGroup from '../../../core/components/preview-group/PreviewGroup';
import Header from '../../../core/components/header/Header';
import Palettes from '../../../core/components/palettes/Palettes';
import { useState } from 'react';
import { DEFAULT_COLOR } from '../../../utils/colorUtils';
import { PaletteProvider } from '../../../core/palette-context/PaletteContext';

const HomeView = () => {

    const [color, setColor] = useState(DEFAULT_COLOR);

    function updateColor([h, s, l]) {
        if (!(h || s || l)) return;
        setColor([h, s, l])
    }

    return (
        <div className="container">
            <div className="header">
                <Header />
            </div>
            <PaletteProvider>
                <div className="side-bar">
                    <SideBar color={color} updateColor={updateColor} />
                </div>
                <div className="main-content">
                    <section>
                        <Palettes color={color} />
                    </section>
                    <section>
                        <PreviewGroup />
                    </section>
                </div>
            </PaletteProvider>
            <div className="footer"></div>
        </div>

    )
}

export default HomeView;