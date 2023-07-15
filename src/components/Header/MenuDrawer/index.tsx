'use client'
import React, { useState } from 'react';

import { HiMenuAlt4 } from 'react-icons/hi'
import { IoCloseOutline } from 'react-icons/io5'
import { RiGithubLine, RiInstagramLine, RiLinkedinFill } from 'react-icons/ri';
import { MdKeyboardArrowRight } from 'react-icons/md'

import IconButton from '@/components/IconButton';

import './styles.css';
import Link from 'next/link';

const MenuDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className='flex justify-end items-center w-12 h-12' onClick={toggle}>
        <HiMenuAlt4 className='w-6 h-6'/>
      </div>

      { /* Drawer Menu */ }
      <div className={`${isOpen? 'visible' : 'invisible'} fixed top-0 left-0 w-full h-full flex justify-start items-start z-10`}>
        <div className='drawer-overlay' onClick={toggle}/>
        <div className={`drawer-body h-full-safety ${isOpen ? 'drawer-body--opened' : ''}`}>
          <div className='flex flex-row justify-between w-full pr-8 pl-8 h-16'>
            <span className='flex title flex-row items-center bold align-bottom'>d<p className='c-highlight'>nr</p></span>
            <div className='flex justify-center items-center' onClick={toggle}>
              <IoCloseOutline className='w-6 h-6'/>
            </div>
          </div>
          <hr style={{borderTop: '1px solid #ddd'}} className='m-4 mt-0'/>
          <div className='flex flex-col p-4 relative h-full'>
            <Link onClick={toggle} href='/' className='flex flex-row items-center uppercase c-light mb-6 tracking-wider'>
              <MdKeyboardArrowRight className='mr-2' />
              Página Inicial
            </Link>
            <Link onClick={toggle} href='/technology' className='flex flex-row items-center uppercase c-light mb-6 tracking-wider'>
              <MdKeyboardArrowRight className='mr-2' />
              Tecnologias
            </Link>
            <Link onClick={toggle} href='/experience' className='flex flex-row items-center uppercase c-light mb-6 tracking-wider'>
              <MdKeyboardArrowRight className='mr-2' />
              Experiência
            </Link>
            <Link onClick={toggle} href='/blog' className='flex flex-row items-center uppercase c-light mb-6 tracking-wider'>
              <MdKeyboardArrowRight className='mr-2' />
              Blog
            </Link>
            <Link onClick={toggle} href='https://os.dnnr.dev/' className='flex flex-row items-center uppercase c-light mb-6 tracking-wider'>
              <MdKeyboardArrowRight className='mr-2' />
              dnr.OS
            </Link>

            <div className='flex flex-col absolute bottom-8 left-4'>
              <label className='uppercase l-space-2 semi-bold'>
                me encontre
              </label>
              <ul className='flex flex-row mt-4'>
                <li className='mr-8'>
                  <IconButton link='https://github.com/dennergazevedo' Icon={RiGithubLine} name="GitHub"/>
                </li>
                <li className='mr-8'>
                  <IconButton link='https://www.linkedin.com/in/dnnr/' Icon={RiLinkedinFill} name="LinkedIn"/>
                </li>
                <li className='mr-8'>
                  <IconButton link='https://www.instagram.com/dnnraz/' Icon={RiInstagramLine} name="Instagram"/>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuDrawer;