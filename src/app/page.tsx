import React from 'react';
import Image from 'next/image';
import './styles.css';

import { RiInstagramLine, RiLinkedinFill, RiGithubLine } from 'react-icons/ri'
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'

import Me from '@/assets/me.png'
import IconButton from '@/components/IconButton';

const Home: React.FC = () => {
  
  return (
    <section className='flex home-container items-center justify-center h-full'>
      <div className='flex flex-col justify-start items-start text-body home-body'>
        <h3 className='text-1xl cursor-default mb-4 uppercase l-space-8'>
          Hello World!
        </h3>
        <h1 className='home-title bold text-center cursor-default'>
          Olá, eu sou <span className='c-highlight'>Denner Azevedo</span>
        </h1>
        <p className='home-subtitle text-center cursor-default mt-4'>
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
        <div className='flex container-wrap justify-between w-full'>
          <div className='flex flex-col mt-12'>
            <label className='uppercase l-space-2 semi-bold'>
              social
            </label>
            <ul className='flex flex-row mt-4'>
              <li className='mr-8'>
                <IconButton link='https://github.com/dennergazevedo' Icon={RiGithubLine} />
              </li>
              <li className='mr-8'>
                <IconButton link='https://www.linkedin.com/in/dennergazevedo/' Icon={RiLinkedinFill} />
              </li>
              <li className='mr-8'>
                <IconButton link='https://www.instagram.com/dnnraz/' Icon={RiInstagramLine} />
              </li>
            </ul>
          </div>

          <div className='flex flex-col mt-12'>
            <label className='uppercase l-space-2 semi-bold'>
              melhores skills
            </label>
            <ul className='flex flex-row mt-4'>
              <li className='mr-8'>
                <IconButton link='https://www.javascript.com/' Icon={IoLogoJavascript} background='#FCDC00' color='#181818'/>
              </li>
              <li className='mr-8'>
                <IconButton link='https://react.dev/' Icon={FaReact} background='#087EA4' color='#FFF'/>
              </li>
              <li className='mr-8'>
                <IconButton link='https://nodejs.org/' Icon={IoLogoNodejs} background='#5FA04E' color='#FFF'/>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end home-body'>
        <div className='flex relative rounded-3xl linear-bg-white shadow-white profile-image'>
          <Image src={Me} alt='profile-photo' className='flex rounded-3xl absolute bottom-0 left-0 w-full' />
        </div>
      </div>
    </section>
  );
}

export default Home;