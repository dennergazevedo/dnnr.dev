import React from 'react';
import Image from 'next/image';

import { RiInstagramLine, RiLinkedinFill, RiGithubLine } from 'react-icons/ri'
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'

import Me from '@/assets/me.png'
import IconButton from '@/components/IconButton';

const Home: React.FC = () => {

  return (
    <section className='flex flex-col-reverse p-6 pt-32 items-center justify-center h-full md:flex-row md:p-32 md:pr-48 md:pl-48 md:pt-60'>
      <div className='flex flex-col mt-12 justify-center items-center w-full md:w-1/2 md:mt-0 md:justify-start md:items-start'>
        <h3 className='text-1xl cursor-default mb-4 uppercase l-space-8'>
          Hello World!
        </h3>
        <h1 className='text-4xl flex flex-col bold text-center cursor-default md:inline-block md:text-5xl'>
          Olá, eu sou <span className='c-highlight'>Denner Azevedo</span>
        </h1>
        <p className='text-base mb-6 text-center cursor-default mt-4 md:mb-0 md:text-2xl'>
          <span className='c-highlight'>Tech Lead</span> 
          &nbsp; & &nbsp;
          <span className='c-highlight'>Web Developer</span>
        </p>
        <p className='mt-4 leading-8 c-light'>
        Uso minhas habilidades de desenvolvimento como uma ferramenta para 
        simplificar e otimizar a experiência do cliente, transformando o 
        site em uma poderosa ferramenta de vendas, captação e retenção de clientes.
          {/* FERRAMENTA DE VENDAS, CAPTAÇÃO E RETENÇÃO DE CLIENTES */}
        </p>
        <div className='flex flex-col mt-0 justify-between w-full md:flex-row md:mt-16'>
          <div className='flex flex-col mt-12'>
            <label className='uppercase l-space-2 semi-bold'>
              social
            </label>
            <ul className='flex flex-row mt-4'>
              <li className='mr-8'>
                <IconButton link='https://github.com/dennergazevedo' Icon={RiGithubLine} name="Github"/>
              </li>
              <li className='mr-8'>
                <IconButton link='https://www.linkedin.com/in/dnnr/' Icon={RiLinkedinFill} name="LinkedIn"/>
              </li>
              <li className='mr-8'>
                <IconButton link='https://www.instagram.com/dnnraz/' Icon={RiInstagramLine} name="Instagram"/>
              </li>
            </ul>
          </div>

          <div className='flex flex-col mt-12'>
            <label className='uppercase l-space-2 semi-bold'>
              melhores skills
            </label>
            <ul className='flex flex-row mt-4'>
              <li className='mr-8'>
                <IconButton link='https://www.javascript.com/' Icon={IoLogoJavascript} background='#FCDC00' color='#181818' name="Javascript"/>
              </li>
              <li className='mr-8'>
                <IconButton link='https://react.dev/' Icon={FaReact} background='#087EA4' color='#FFF' name="React"/>
              </li>
              <li className='mr-8'>
                <IconButton link='https://nodejs.org/' Icon={IoLogoNodejs} background='#5FA04E' color='#FFF' name="Node"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-center w-full h-72 md:w-1/2 md:h-1/2 image-block'>
        <div className='flex relative rounded-3xl linear-bg-white shadow-white w-4/5 h-full max-w-sm image-block '>
          <Image src={Me} alt='profile-photo' className='flex rounded-3xl absolute bottom-0 left-0 w-full max-w-sm' />
        </div>
      </div>
    </section>
  );
}

export default Home;