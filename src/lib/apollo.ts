'use client'
import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/clifalr3d031501up6x736r13/master',
  cache: new InMemoryCache(),
  ssrMode: true,
})