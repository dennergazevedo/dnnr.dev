'use client'
import Image from 'next/image';
import React from 'react';

import { techList } from '@/app/utils/constants';
import IconButton from '@/components/IconButton';
import Link from 'next/link';

const Card: React.FC<PostCard> = ({ post }: PostCard) => {

  const techArray: any = techList

  return (
    <Link href={`/blog/post/${post?.slug}`} className='flex flex-col p-4 rounded-lg linear-bg-white shadow-white cursor-pointer hover:-translate-y-2 transition-all md:w-64'>
      <Image 
        src={post?.banner?.url} 
        alt={post?.title} 
        width={640} 
        height={360}
        className='rounded mb-4 flex w-full md:w-64'
      />
      <div className='flex flex-col h-full justify-between'>
        <h3 className='flex w-full bold text-base'>
          {post?.title}
        </h3>
        <div className='flex flex-col'>
        <hr className='mt-4 mb-2'/>
          <span className='text-sm c-highlight small-caps l-space-2 mb-1'>Tecnologias</span>
          <ul className='flex'>
            {
              post?.tech?.split(',')?.map(item => {
                const tech: Tech = techArray[item]
                return (
                  <li key={post.slug+'-'+item} className='mr-2'>
                    <IconButton link={tech.link} Icon={tech.Icon} background={tech.background} color={tech.color} size='small' name="Tech"/>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default Card;