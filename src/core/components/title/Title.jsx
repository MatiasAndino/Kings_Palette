import './title.css';

const Title = ({text = 'TITULO GENERICO'}) => {
  return (
    <h1 className='title'>{text}</h1>
  )
}

export default Title