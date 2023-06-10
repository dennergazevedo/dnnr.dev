'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { MdOutlinePostAdd } from 'react-icons/md';
import MenuDrawer from './MenuDrawer';

const Header: React.FC = () => {

  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    function handleResize() {
      if(window.innerWidth < 640) setIsMobile(true)
      else setIsMobile(false)
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='flex p-2 pr-4 pl-4 flex-row w-full justify-between md:pr-16 md:pl-16'>
      <Link  href="/" className='flex flex-row w-full justify-start'>
        <span className='flex flex-row title bold align-bottom'>d<p className='c-highlight'>nr</p></span>
      </Link>
      <nav className='flex justify-center align-center'>
        {
          isMobile ? 
          <MenuDrawer />
          :
          <ul className='flex flex-row w-full justify-end items-center'>
            <li className='flex justify-center items-center mr-4 ml-4 c-highlight-hover'>
              <Link href="/">
                Início
              </Link>
            </li>
            <li className='flex justify-center items-center mr-4 ml-4 c-highlight-hover'>
              <Link href="/tech">
                Tecnologias
              </Link>
            </li>
            <li className='flex justify-center items-center mr-4 ml-4 c-highlight-hover'>
              <Link href="/experience">
                Experiência
              </Link>
            </li>
            <li className='flex justify-center items-center h-8 mr-4 ml-4 bg-highlight-hover bg-highlight pr-4 pl-4 rounded cursor-pointer'>
              <Link href="/blog" className='flex flex-row justify-center items-center'>
                <MdOutlinePostAdd className='mr-2'/> Blog
              </Link>
            </li>
          </ul>
        }
      </nav>
    </header>
  );
}

export default Header;