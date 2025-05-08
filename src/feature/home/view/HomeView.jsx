import './homeview.css';
import SideBar from '../../../core/components/side-bar/SideBar';
import PreviewGroup from '../../../core/components/preview-group/PreviewGroup';
import Header from '../../../core/components/header/Header';
import Palettes from '../../../core/components/palettes/Palettes';

const HomeView = () => {

    return (
        <div className="container">
            <div className="header">
                <Header />
            </div>
            <div className="side-bar">
                <SideBar />
            </div>
            <div className="main-content">
                <section>
                    <Palettes />
                </section>
                <section>
                    <PreviewGroup />
                </section>
            </div>
            <div className="footer"></div>
        </div>

    )
}

export default HomeView;