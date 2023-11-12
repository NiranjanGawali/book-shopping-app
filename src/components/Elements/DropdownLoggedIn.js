import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUser, logout } from '../../services';
import { toast } from 'react-toastify';

export const DropdownLoggedIn = ({ setDropdown }) => {
  const navigate = useNavigate();
  // className =
  //   'select-none absolute top-12 right-50 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600';

  const [user, setUser] = useState({});

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    async function getLoggedInUserDetails() {
      try {
        const userDetails = await getUser();
        userDetails.email ? setUser(userDetails) : handleLogout();
      } catch (err) {
        toast.error(err.message, {
          position: 'bottom-center',
        });
      }
    }
    getLoggedInUserDetails();
  }, []); // eslint-disable-line

  const handleLogout = () => {
    logout();
    navigate('/');
    setDropdown(false);
  };

  return (
    <div
      id='dropdownAvatar'
      className='select-none	absolute top-12 right-50 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'
    >
      <div className='py-3 px-4 text-sm text-gray-900 dark:text-white'>
        <div className='font-medium truncate'>{user.email}</div>
      </div>
      <ul
        className='py-1 text-sm text-gray-700 dark:text-gray-200'
        aria-labelledby='dropdownUserAvatarButton'
      >
        <li>
          <Link
            to='/products'
            className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            onClick={() => setDropdown(false)}
          >
            All eBooks
          </Link>
        </li>
        <li>
          <Link
            to='/dashboard'
            className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            onClick={() => setDropdown(false)}
          >
            Dashboard
          </Link>
        </li>
      </ul>
      <div className='py-1'>
        <span
          className='cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
          onClick={handleLogout}
        >
          Log out
        </span>
      </div>
    </div>
  );
};
