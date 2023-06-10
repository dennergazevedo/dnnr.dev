import React from 'react';
import TechCard from './Card';

import { techInfo } from './constants';

const Technology: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-start h-full w-full p-8 md:p-32 md:pr-48 md:pl-48'>
      <div className='flex flex-col items-center justify-center mb-16'>
        <p className='text-xs c-highlight uppercase l-space-2 semi-bold md:text-base'>4+ Anos de experiência</p>
        <h1 className='text-4xl bold capitalize c-light md:text-5xl'>Tecnologias</h1>
      </div>
      <ul className='flex flex-col w-full md:flex-row md:flex-wrap'>
        {
          techInfo.map(tech => {
            return (
              <li key={tech.title} className='flex rounded-lg linear-bg-white shadow-white p-8 hover:-translate-y-2 transition-all mt-8 md:w-80 md:mr-8'>
                <TechCard 
                  title={tech.title}
                  Icon={tech.Icon}
                  background={tech.background}
                  color={tech.color}
                  text={tech.text}
                  link={tech.link}
                  subtitle={tech.subtitle}
                />
              </li>
            )
          })
        }
      </ul>
    </section>
  );
}

export default Technology;