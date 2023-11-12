import React, { useEffect, useState } from 'react';
import { ProductCard } from '../../components';
import { FilterBar } from './components/FilterBar';
import { useLocation } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import { useFilter } from './../../context';
import { getProducts } from '../../services';
import { toast } from 'react-toastify';

export const ProductList = () => {
  const [show, setShow] = useState(false);
  const { products, initialProductList } = useFilter();
  const [errorMessage, setErrorMessage] = useState('');

  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get('q');

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts(searchTerm);
        initialProductList(data);
      } catch (err) {
        setErrorMessage('Sorry, Server Error! Failed to load');
        toast.error(err.message, {
          position: 'bottom-center',
        });
      }
    }
    fetchProducts();
  }, [searchTerm]);

  useTitle('Explore E-Books Collection');

  return (
    <main>
      <section className='my-5'>
        <div className='my-5 flex justify-between'>
          <span className='text-2xl font-semibold dark:text-slate-100 mb-5'>
            All eBooks {products.length}
          </span>
          <span>
            <button
              id='dropdownMenuIconButton'
              data-dropdown-toggle='dropdownDots'
              className='inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700'
              type='button'
              onClick={() => setShow(!show)}
            >
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
            </button>
          </span>
        </div>

        <div className='flex flex-wrap justify-center lg:flex-row'>
          <span className='text-lg font-bold dark:text-white'>
            {errorMessage}
          </span>
          {products.map((product) => {
            return <ProductCard key={product?.id} product={product} />;
          })}{' '}
        </div>
      </section>
      {show && <FilterBar setShow={setShow} />}
    </main>
  );
};
