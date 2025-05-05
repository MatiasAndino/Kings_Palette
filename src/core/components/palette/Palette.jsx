import ColorBlock from '../color-block/ColorBlock';
import EmptyBlock from '../empty-block/EmptyBlock';
import './palette.css';

const Palette = ({ title, palette }) => {
  const maxQuantity = 5;
  return (
    <div className='palette-container'>
      <span>{title}</span>
      <div className="palette">
        {palette.map(color => <ColorBlock color={color} key={crypto.randomUUID()} />)}
        {[...new Array(maxQuantity - (palette.length > maxQuantity ? maxQuantity : palette.length))].map(_ => <EmptyBlock key={crypto.randomUUID()} />)}
      </div>

    </div>
  )
}

export default Palette;