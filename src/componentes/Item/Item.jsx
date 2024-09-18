import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, imagen}) => {
  return (
    <div className='Items'>
        <img src={imagen} alt={nombre} />
        <h2>{nombre} </h2>
        <p>${precio} </p>
        <p>ID: {id} </p>
        {<button><Link to={`/item/${id}`}>Ver Detalles</Link></button>}
    </div>
  )
}

export default Item