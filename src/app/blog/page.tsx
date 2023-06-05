'use client'
import React, { Fragment, useEffect, useMemo } from 'react';
import Image from 'next/image';

import { usePosts } from '@/contexts/posts';

import { techList } from '../utils/constants';
import IconButton from '@/components/IconButton';
import Card from './components/Card';

const Blog: React.FC = () => {
  const { posts } = usePosts()

  useEffect(() => {
    console.log("posts", posts);
  }, [posts])

  const lastPost = useMemo(() => {
    return posts[0] || {} as IPost;
  }, [posts])

  const techArray: any = techList

  if(!posts) return <Fragment />

  return (
    <div className='flex flex-col p-16'>
      <section>
        <div className='flex flex-row'>
          <Image 
            src={lastPost?.banner?.url} 
            alt={lastPost?.slug} 
            width={640} 
            height={360}
            className='flex w-2/4 object-contain rounded'
          />
          <div className='flex flex-col w-2/4 pl-8'>
            <h3 className='title bold max-w-lg'>
              {lastPost.title}
            </h3>
            <div className='flex flex-col mt-4 mb-3 max-h-40 overflow-hidden c-light-2'>
              {lastPost.subtitle}
            </div>
            <hr className='mb-4'/>
            <div>
              <span className='text-xs c-light uppercase l-space-2 semi-bold'>Tecnologias:</span>
              <ul className='flex flex-row flex-wrap mt-2'>
                {
                  lastPost?.tech?.split(',')?.map(item => {
                    const tech: Tech = techArray[item]
                    return (
                      <li key={lastPost.slug+'-'+item} className='mr-2'>
                        <IconButton link={tech.link} Icon={tech.Icon} background={tech.background} color={tech.color} size='small'/>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div>
              <ul className='flex flex-row flex-wrap mt-4'>
                {
                  lastPost?.type?.split(',')?.map(item => {
                    return (
                      <li 
                        key={lastPost.slug+'-tech-'+item} 
                        className='flex cursor-default text-xs rounded-full p-1 pr-4 pl-4 mr-2 bg-black text-white'
                      >
                        { item }
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-16'>
        <ul className='flex flex-row flex-wrap'>
          {
            posts.map(post => {
              return(
                <li key={post.slug}>
                  <Card post={post}/>
                </li>
              )
            })
          }
        </ul>
      </section>
    </div>
  );
}

export default Blog;