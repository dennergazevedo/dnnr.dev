'use client'
import React, {
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";
import { gql, useQuery, useLazyQuery } from "@apollo/client"

const PostsContext = createContext<IPostsContext>({} as IPostsContext);

const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts {
      id
      slug
      subtitle
      title
      content{
        html
      }
      updatedAt
      createdAt
      type
      tech
      banner {
        url
      }
    }
  }
`

const GET_POSTS_BY_TYPE = gql`
  query GetPostsByType($postType: String!) {
    posts(where: { type: $postType }) {
      id
      slug
      subtitle
      title
      content{
        html
      }
      updatedAt
      createdAt
      type
      tech
      banner {
        url
      }
    }
  }
`;

const GET_POSTS_BY_SLUG = gql`
  query GetPostsByType($postSlug: String!) {
    posts(where: { slug: $postSlug }) {
      id
      slug
      subtitle
      title
      content{
        html
      }
      updatedAt
      createdAt
      type
      tech
      banner {
        url
      }
    }
  }
`;

const PostsProvider = ({ children }: any) => {
  const [posts, setPosts] = useState<IPost[]>([] as IPost[]);

  const { data } = useQuery(GET_ALL_POSTS)
  const [getPostsByType] = useLazyQuery(GET_POSTS_BY_TYPE)
  const [getPostsBySlug] = useLazyQuery(GET_POSTS_BY_SLUG)

  useEffect(() => {
    if(data) setPosts(data.posts)
  }, [data])

  return (
    <PostsContext.Provider value={{ posts, getPostsByType, getPostsBySlug }}>
        {children}
    </PostsContext.Provider>
  );
};

function usePosts() {
  const context = useContext(PostsContext);

  if (!context)
    throw new Error("PostsProvider não encontrado.");
  
  return context
}

export { PostsProvider, usePosts };
