import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/logo.png';
import { Search } from '../Sections/Search';
import { DropdownLoggedIn } from '../Elements/DropdownLoggedIn';
import { DropdownLoggedOut } from '../Elements/DropdownLoggedOut';
import { useCart } from '../../context/CartContext';

export const Header = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode'))
  );

  const [searchWindow, setSearchWindow] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const token = JSON.parse(sessionStorage.getItem('token'));

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode) || false);
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const { cartList } = useCart();

  return (
    <header>
      <nav className='bg-white border-gray-200 dark:bg-gray-900 border dark:border-none'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4'>
          <Link to='/' className='flex items-center'>
            <img src={logo} className='h-8 mr-3' alt='Flowbite Logo' />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              CodeBook
            </span>
          </Link>
          <div className='flex items-center'>
            <span
              className='bi bi-gear-wide-connected text-xl mr-5 text-gray-700 dark:text-white cursor-pointer'
              onClick={() => setDarkMode(!darkMode)}
            ></span>
            <span
              className='bi bi-search text-xl mr-5 text-gray-700 dark:text-white cursor-pointer'
              onClick={() => setSearchWindow(!searchWindow)}
            ></span>
            <Link to='/cart' className='text-gray-700 dark:text-white mr-5'>
              <span className='bi bi-cart-fill text-2xl relative'>
                <span className='text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full'>
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              className='bi bi-person-circle text-xl mr-5 text-gray-700 dark:text-white cursor-pointer'
              onClick={() => setDropdown(!dropdown)}
            ></span>
            {dropdown &&
              (token ? (
                <DropdownLoggedIn setDropdown={setDropdown} />
              ) : (
                <DropdownLoggedOut setDropdown={setDropdown} />
              ))}
          </div>
        </div>
      </nav>
      {searchWindow && <Search setSearchWindow={setSearchWindow} />}
    </header>
  );
};
