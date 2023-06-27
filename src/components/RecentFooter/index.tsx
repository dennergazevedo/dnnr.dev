import React from 'react';
import { RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiGithubLine } from 'react-icons/ri'
import { MdOutlineEmail } from 'react-icons/md'

import Link from 'next/link';

const RecentFooter: React.FC = () => {
  return (
    <section className='flex flex-row border-l-0 border-r-0 items-center justify-between w-full h-72 absolute bottom-0 left-0'>
      <ul className='flex flex-row justify-start items-end h-full w-1/2 p-8'>
        <li className='mr-8 opacity-40 hover:opacity-100'>
          <Link href='https://github.com/dennergazevedo' target='_blank'>
            <RiGithubLine className='w-6 h-6'/>
          </Link>
        </li>
        <li className='mr-8 opacity-40 hover:opacity-100'>
          <Link href='https://www.linkedin.com/in/dnnr/' target='_blank'>
            <RiLinkedinFill className='w-6 h-6'/>
          </Link>
        </li>
        <li className='mr-8 opacity-40 hover:opacity-100'>
          <Link href='https://www.instagram.com/dnnraz/' target='_blank'>
            <RiInstagramLine className='w-6 h-6'/>
          </Link>
        </li>
        <li className='mr-8 opacity-40 hover:opacity-100'>
          <Link href='https://www.facebook.com/denner.azevedo.92' target='_blank'>
            <RiFacebookFill className='w-6 h-6'/>
          </Link>
        </li>
        <li className='mr-8 opacity-40 hover:opacity-100'>
          <Link href='mailto:dennergazevedo@gmail.com' target='_blank'>
            <MdOutlineEmail className='w-6 h-6'/>
          </Link>
        </li>
      </ul>
      <div className='dark-glass rounded-lg rounded-b-none rounded-tr-none border-l-0 border-r-0 flex flex-row items-center justify-center w-1/2 h-72'>
        post
      </div>
    </section>
  );
}

export default RecentFooter;