import Link from 'next/link';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <section className='flex flex-col justify-center items-center h-96'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='title bold'>Oops!</h1>
        <p>A página que você procura não foi encontrada</p>
      </div>
      <Link href="/" className='text-sky-500 cursor-pointer underline mt-8'>
        voltar para página inicial
      </Link>
    </section>
  );
}

export default NotFound;