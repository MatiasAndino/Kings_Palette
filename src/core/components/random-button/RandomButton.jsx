import './random_button.css';

const RandomButton = ({ handleClick }) => {

    return (
        <button onClick={handleClick}>GENERATE RANDOM</button>
    )
}

export default RandomButton