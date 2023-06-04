'use client'
import React, { Fragment, useEffect } from 'react';

import { usePosts } from '@/contexts/posts';

const Blog: React.FC = () => {
  const { posts } = usePosts()

  useEffect(() => {
    console.log("posts", posts);
  }, [posts])

  if(!posts) return <Fragment />

  return (
    <div>
      Blog
    </div>
  );
}

export default Blog;