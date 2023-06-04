'use client'
import React, { Fragment } from 'react';
import Link from 'next/link';

import { techList } from './constants';
import IconButton from '@/components/IconButton';

const Card: React.FC<TechCard> = ({ duration, name, site, techs } : TechCard) => {

  const techArray: any = techList

  return (
    <Fragment>
      <h3 className='text-2xl bold cursor-default'>{name}</h3>
      <p className='text-sm cursor-default'>{duration}</p>
      <Link href={`https://${site}`} className='text-sm mt-2 c-highlight'>
        {site}
      </Link>
      <hr style={{ borderTop: '1px solid #ddd' }} className='w-full mt-4 mb-2'/>
      <div className='flex flex-col items-start justify-start'>
        <p className='text-xs mb-2 c-light-2'>Principais Tecnologias:</p>
        <ul className='flex flex-row flex-wrap'>
          {
            techs.map(item => {
              const tech: Tech = techArray[item]
              return (
                <li key={name+item} className='mr-2'>
                  <IconButton link={tech.link} Icon={tech.Icon} background={tech.background} color={tech.color} size='small'/>
                </li>
              )
            })
          }
        </ul>
      </div>
    </Fragment>
  );
}

export default Card;