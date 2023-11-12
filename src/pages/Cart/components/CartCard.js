import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';

export const CartCard = ({ product }) => {
  const { poster, name, price, id } = product;
  const { removeFromCart } = useCart();
  const handleRemove = () => {
    removeFromCart(product);
  };
  return (
    <div className='flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 '>
      <div className='flex'>
        <Link to={`/products/${id}`}>
          <img className='w-32 rounded' src={poster} alt={name} />
        </Link>
        <div className=''>
          <Link to={`/products/${id}`}>
            <p className='text-lg ml-2 dark:text-slate-200'>{name}</p>
          </Link>
          <button
            className='text-base ml-2 text-red-400'
            onClick={handleRemove}
          >
            Remove
          </button>
        </div>
      </div>
      <div className='text-lg m-2 dark:text-slate-200'>
        <span>{price}</span>
      </div>
    </div>
  );
};
