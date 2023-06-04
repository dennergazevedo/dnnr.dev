import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='flex flex-col justify-center items-center absolute bottom-0 left-0 w-full p-4'>
      <hr style={{borderTop: '1px solid #ddd'}} className='w-4/5 m-4'/>
      <span className='c-light text-xs'>
       © dnr {new Date().getFullYear()} | CNPJ: 48.039.130/0001-64
      </span>
    </footer>
  );
}

export default Footer;