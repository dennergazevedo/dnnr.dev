'use client'
import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { techList } from '@/app/utils/constants';
import { usePosts } from '@/contexts/posts';

import './styles.css';

import { BsFillBookmarkFill } from 'react-icons/bs';
import IconButton from '@/components/IconButton';

const Post: React.FC<IDynamicPost> = ({ params }: IDynamicPost) => {
  const [post, setPost] = useState<IPost>({} as IPost);
  const { getPostsBySlug } = usePosts()

  const { slug } = params

  const techArray: any = techList

  const loadPost = useCallback(async () => {
    const response = await getPostsBySlug({
      variables: { postSlug: slug }
    })

    setPost(response?.data?.posts[0])
  }, [getPostsBySlug, slug])

  const createdAt = useMemo(() => {
    if(!post?.createdAt) return ''
    const date = new Date(post.createdAt)
    return `${('00' + date.getDate()).slice(-2)}/${('00' + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}`
  }, [post])

  useEffect(() => {
    loadPost()
  }, [loadPost])

  if(!post.slug?.length) return <Fragment />

  return (
    <section className='flex flex-col p-4 w-full h-full md:max-w-7xl md:m-auto'>
      <div className='flex flex-col w-full h-full md:flex-row md:items-center'>
        <Image 
          src={post?.banner?.url} 
          alt={post?.slug} 
          width={640} 
          height={360}
          className='md:w-1/2'
        />
        <div className='flex flex-col md:w-1/2 md:pl-16'>
          <h1 className='title bold mt-4 max-w-lg'>
            {post?.title}
          </h1>
          <div className='flex flex-col mt-8'>
            <span>por <b>Denner Azevedo</b></span>
            <div className='flex flex-row items-center mt-2 text-xs'>
              <BsFillBookmarkFill className='text-lime-500'/>
              <span className='uppercase ml-2'>
                postado em {createdAt}
              </span>
            </div>
          </div>
          <div>
            <ul className='flex flex-row items-center mt-4'>
              {
                post.tech.split(',').map(item => {
                const tech: Tech = techArray[item]
                  return (
                    <li key={post.slug+'-'+item} className='mr-2'>
                      <IconButton link={tech.link} Icon={tech.Icon} background={tech.background} color={tech.color} size='small' name={tech.link}/>
                    </li>
                  )
                })
              }
            </ul>
            <ul className='flex flex-row flex-wrap mt-4'>
              {
                post?.type?.split(',')?.map(item => {
                  return (
                    <li 
                      key={post.slug+'-tech-'+item} 
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
      <div className='flex flex-col mt-16 mb-8 post-blog' dangerouslySetInnerHTML={{ __html: post.content?.html }} />
    </section>
  );
}

export default Post;