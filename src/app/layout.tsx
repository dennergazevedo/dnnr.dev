'use client'
import './styles/globals.css'
import './styles/theme-dark.css'
import './styles/theme-light.css'
import { Ubuntu } from 'next/font/google'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/apollo'

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ['latin'],
  preload: true
})

import { PostsProvider } from '@/contexts/posts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Head from './head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="light">
      <Head />
      <body className={`${ubuntu.className} relative pb-16`}>
        <ApolloProvider client={client}>
          <PostsProvider>
            <Header />
            {children}
            <Footer />
          </PostsProvider>
        </ApolloProvider>
      </body>
    </html>
  )
}