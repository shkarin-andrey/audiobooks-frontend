import { Disclosure } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { router } from '../../router/router';
import { IRouter } from '../../router/router.interface';
import classNames from '../../utils/classNames';

const Navigation: FC = () => {
  return (
    <Disclosure
      as='nav'
      className='border-b border-indigo-300 border-opacity-25 bg-indigo-600 lg:border-none'
    >
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between lg:border-b lg:border-indigo-400 lg:border-opacity-25'>
              <div className='flex items-center px-2 lg:px-0'>
                <div className='flex-shrink-0'>
                  <img
                    className='block h-8 w-8'
                    src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300'
                    alt='Your Company'
                  />
                </div>
                <div className='hidden lg:ml-10 lg:block'>
                  <div className='flex space-x-4'>
                    {router.map(
                      (item: IRouter) =>
                        item.name && (
                          <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                              classNames(
                                isActive
                                  ? 'bg-indigo-700 text-white'
                                  : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                                'block rounded-md py-2 px-3 text-base font-medium',
                              )
                            }
                          >
                            {item.name}
                          </NavLink>
                        ),
                    )}
                  </div>
                </div>
              </div>
              <div className='flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end'>
                <div className='w-full max-w-lg lg:max-w-xs'>
                  <label htmlFor='search' className='sr-only'>
                    Поиск
                  </label>
                  <div className='relative text-gray-400 focus-within:text-gray-600'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                      <MagnifyingGlassIcon className='h-5 w-5' aria-hidden='true' />
                    </div>
                    <input
                      id='search'
                      className='block w-full rounded-md border border-transparent bg-white py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:text-sm'
                      placeholder='Поиск'
                      type='search'
                      name='search'
                    />
                  </div>
                </div>
              </div>
              <div className='flex lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='lg:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {router.map(
                (item: IRouter) =>
                  item.name && (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? 'bg-indigo-700 text-white'
                            : 'text-white hover:bg-indigo-500 hover:bg-opacity-75',
                          'block rounded-md py-2 px-3 text-base font-medium',
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ),
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navigation;
