import React from 'react';

import { Navbar, Button, Dropdown, Menu } from 'react-daisyui';
import { Link, NavLink } from 'react-router-dom';

export const CustomNavbar = () => {
    return (
        <div>
            <Navbar className='bg-customDarkGreen'>
                <Navbar.Start>
                    <Dropdown>
                        <Button
                            color='ghost'
                            tabIndex={0}
                            className='lg:hidden'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h8m-8 6h16'
                                />
                            </svg>
                        </Button>
                        <Dropdown.Menu
                            tabIndex={0}
                            className='w-52 menu-compact mt-3'>
                            <Dropdown.Item>
                                <NavLink to={'/about'}>About Us</NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <NavLink to={'/contact'}>About Us</NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item to={'/projects'}>
                                Projects
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <NavLink
                        className='btn btn-ghost normal-case text-xl'
                        to={'/home'}>
                        Greenbar & Artisans
                    </NavLink>
                    {/* <a className='btn btn-ghost normal-case text-xl'>
                        Greenbar & Artisans
                    </a> */}
                </Navbar.Start>
                <Navbar.Center className='hidden lg:flex'>
                    <Menu horizontal className='p-0'>
                        <Menu.Item tabIndex={0}>
                            <NavLink to={'/about'}>About Us</NavLink>
                        </Menu.Item>
                        <Menu.Item tabIndex={1}>
                            <NavLink to={'/contact'}>Contact Us</NavLink>
                        </Menu.Item>
                        <Menu.Item tabIndex={2}>
                            <NavLink to={'/projects'}>Projects</NavLink>
                        </Menu.Item>
                    </Menu>
                </Navbar.Center>
                <Navbar.End></Navbar.End>
            </Navbar>
        </div>
    );
};
