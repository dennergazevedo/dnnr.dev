'use client'
import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://sa-east-1.cdn.hygraph.com/content/clifalr3d031501up6x736r13/master',
  cache: new InMemoryCache(),
  ssrMode: true,
})