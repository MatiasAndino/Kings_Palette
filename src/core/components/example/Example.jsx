import './example.css';
import Button from '../../../core/components/button/Button';
import Title from '../../../core/components/title/Title';
import Text from '../../../core/components/text/Text';
import Border from '../../../core/components/border/Border';
import Navbar from '../../../core/components/navbar/Navbar';

const Example = () => {
    return (
        <div className="example-container">

            <div className="nav">
                <Navbar />
            </div>

            <div className="center">
                <div className="left">
                    {/* <img src={image} /> */}
                </div>
                <div className="right">
                    <Title text="KING'S PALETTE" />
                    <Text />

                </div>
            </div>

            <Border>
                <Title text="KING'S PALETTE" />
                <Text />
            </Border>

            <div className="buttons">
                <Button />
                <Button />
            </div>
        </div>
    )
}

export default Example