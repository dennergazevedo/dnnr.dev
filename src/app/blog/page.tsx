'use client'
import React, { Fragment, useMemo, useState } from 'react';
import Image from 'next/image';

import { usePosts } from '@/contexts/posts';

import { techList } from '../utils/constants';
import IconButton from '@/components/IconButton';
import Card from './components/Card';
import Link from 'next/link';

const Blog: React.FC = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const { posts } = usePosts()

  const toggle = () => setShowAll(!showAll)

  const lastPost = useMemo(() => {
    return posts[0] || {} as IPost;
  }, [posts])

  const techArray: any = techList

  if(!posts) return <Fragment />

  return (
    <div className='flex flex-col p-4 md:p-16'>
      <section>
        <div className='flex flex-col md:flex-row'>
          <Image 
            src={lastPost?.banner?.url} 
            alt={lastPost?.slug} 
            width={640} 
            height={360}
            className='flex w-full object-contain rounded md:w-2/4'
          />
          <div className='flex flex-col w-full mt-4 md:w-2/4 md:pl-8'>
            <Link href={`/blog/post?slug=${lastPost?.slug}`}>
              <h3 className='title bold max-w-lg'>
                {lastPost.title}
              </h3>
            </Link>
            <div className='flex flex-col mt-4 mb-3 overflow-hidden c-light-2'>
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
        <div className='flex flex-row items-center justify-between w-full mb-4'>
          <h1 className='bold'>Meus posts</h1>
          {
            posts?.length > 6 && !showAll ?
            <div className='text-xs text-blue-400 cursor-pointer md:text-base' onClick={toggle}>
              ver todos
            </div> : ''
          }
        </div>
        <ul className='flex flex-row flex-wrap justify-around md:justify-between md:flex-nowrap'>
          {
            posts?.slice(1, showAll ? posts?.length : 6).map(post => {
              return(
                <li key={post.slug} className='flex w-full mt-4 md:w-64'>
                  <Card post={post}/>
                </li>
              )
            })
          }
        </ul>
        {
          posts?.length > 6 && !showAll ?
          <div className='flex mt-8 text-center text-blue-400 w-full justify-center' onClick={toggle}>
            Ver todos
          </div> : ''
        }
      </section>
    </div>
  );
}

export default Blog;