import React from 'react';

import Card from './Card';
import { experiences } from './constants';

const Experience: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-start h-full w-full p-8 md:p-32'>
      <div className='flex flex-col items-center justify-center mb-16'>
        <p className='text-xs c-highlight uppercase l-space-2 semi-bold md:text-base'>5+ Anos de experiência</p>
        <h1 className='text-4xl bold capitalize c-light md:text-5xl'>Meu resumo</h1>
      </div>
      <div className='flex flex-col items-start justify-start w-full'>
        <ul className='flex flex-row flex-wrap justify-around'>
          {
            experiences.map(item => {
              return(
                <li key={item.name} className='w-full mr-0 flex flex-col items-start justify-start linear-bg-white shadow-white rounded-md p-6 mb-8 hover:-translate-y-2 transition-all md:mr-4 md:ml-4 md:w-96'>
                  <Card 
                    duration={item.duration}
                    name={item.name}
                    site={item.site}
                    techs={item.techs}
                    key={item.name}
                  />
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='mt-8'>
        <p className='c-highlight uppercase l-space-2 semi-bold text-xs'>milhões de clientes impactados</p>
      </div>
    </section>
  );
}

export default Experience;