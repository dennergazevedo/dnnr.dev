import React from 'react';

import './styles.css';
import Card from './Card';

const Experience: React.FC = () => {
  return (
    <section className='flex flex-col items-center justify-start h-full w-full experience-container'>
      <div className='flex flex-col items-center justify-center mb-16'>
        <p className='experience-subtitle c-highlight uppercase l-space-2 semi-bold'>4+ Anos de experiência</p>
        <h1 className='experience-title bold capitalize c-light'>Meu resumo</h1>
      </div>
      <div className='flex flex-col items-start justify-start w-full'>
        <ul className='flex flex-row flex-wrap'>
          <li className='experience-card flex flex-col items-start justify-start linear-bg-white shadow-white rounded-md p-6 mb-8 w-96 hover:-translate-y-2 transition-all'>
            <Card 
              duration='Cia Hering (2021 - Atual)'
              name='Hering'
              site='hering.com.br'
              techs={['vtex', 'react', 'node', 'javascript', 'docker']}
              key={'hering'}
            />
          </li>
          <li className='experience-card flex flex-col items-start justify-start linear-bg-white shadow-white rounded-md p-6 mb-8 w-96 hover:-translate-y-2 transition-all'>
            <Card 
              duration='Cia Hering (2021 - Atual)'
              name='Dzarm'
              site='dzarm.com.br'
              techs={['vtex', 'react', 'node', 'javascript']}
              key={'dzarm'}
            />
          </li>
          <li className='experience-card flex flex-col items-start justify-start linear-bg-white shadow-white rounded-md p-6 mb-8 w-96 hover:-translate-y-2 transition-all'>
            <Card 
              duration='CodeBy (2020 - 2021)'
              name='Usaflex'
              site='usaflex.com.br'
              techs={['vtex', 'react', 'node', 'javascript']}
              key={'usaflex'}
            />
          </li>
          <li className='experience-card flex flex-col items-start justify-start linear-bg-white shadow-white rounded-md p-6 mb-8 w-96 hover:-translate-y-2 transition-all'>
            <Card 
              duration='CodeBy (2020 - 2021)'
              name='Carrefour'
              site='mercado.carrefour.com.br'
              techs={['vtex', 'react', 'javascript', 'html', 'css']}
              key={'carrefour'}
            />
          </li>
          <li className='experience-card flex flex-col items-start justify-start linear-bg-white shadow-white rounded-md p-6 mb-8 w-96 hover:-translate-y-2 transition-all'>
            <Card 
              duration='CodeBy (2020)'
              name='Fila'
              site='fila.com.br'
              techs={['vtex', 'javascript', 'html', 'css']}
              key={'fila'}
            />
          </li>
          <li className='experience-card flex flex-col items-start justify-start linear-bg-white shadow-white rounded-md p-6 mb-8 w-96 hover:-translate-y-2 transition-all'>
            <Card 
              duration='CodeBy (2020)'
              name='Umbro'
              site='umbro.com.br'
              techs={['vtex', 'javascript', 'html', 'css']}
              key={'Umbro'}
            />
          </li>
          <li className='experience-card flex flex-col items-start justify-start linear-bg-white shadow-white rounded-md p-6 mb-8 w-96 hover:-translate-y-2 transition-all'>
            <Card 
              duration='CodeBy (2020)'
              name='Intimissimi'
              site='intimissimi.com.br'
              techs={['vtex', 'javascript', 'html', 'css']}
              key={'Intimissimi'}
            />
          </li>
          <li className='experience-card flex flex-col items-start justify-start linear-bg-white shadow-white rounded-md p-6 mb-8 w-96 hover:-translate-y-2 transition-all'>
            <Card 
              duration='CodeBy (2020)'
              name='Dengo'
              site='dengo.com.br'
              techs={['vtex', 'javascript', 'html', 'css']}
              key={'Dengo'}
            />
          </li>
          <li className='experience-card flex flex-col items-start justify-start linear-bg-white shadow-white rounded-md p-6 mb-8 w-96 hover:-translate-y-2 transition-all'>
            <Card 
              duration='CodeBy (2020-2021)'
              name='Extrafarma'
              site='extrafarma.com.br'
              techs={['vtex', 'react', 'node', 'javascript']}
              key={'Extrafarma'}
            />
          </li>
        </ul>
      </div>
      <div className='mt-8'>
        <p className='c-highlight uppercase l-space-2 semi-bold text-xs'>milhões de clientes impactados</p>
      </div>
    </section>
  );
}

export default Experience;