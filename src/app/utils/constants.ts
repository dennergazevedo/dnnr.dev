import { SiJest, SiVtex } from 'react-icons/si'
import { IoLogoJavascript, IoLogoNodejs, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import { FaReact, FaDocker } from 'react-icons/fa'
import { VscJson } from 'react-icons/vsc'
import { SiDotenv, SiExpress } from 'react-icons/si'
import { BiBookContent } from 'react-icons/bi'
import { TbBrain, TbBrandNextjs } from 'react-icons/tb'

export const techList = {
  'react': {
    link: 'https://react.dev/',
    background: '#087EA4',
    color: '#FFF',
    Icon: FaReact
  },
  'node': {
    link: 'https://nodejs.org/',
    background: '#5FA04E',
    color: '#FFF',
    Icon: IoLogoNodejs
  },
  'vtex': {
    link: 'https://vtex.com/br-pt/',
    background: '#F71963',
    color: '#FFF',
    Icon: SiVtex
  },
  'docker': {
    link: 'https://www.docker.com/',
    background: '#2391E6',
    color: '#FFF',
    Icon: FaDocker
  },
  'javascript': {
    link: 'https://www.javascript.com/',
    background: '#FCDC00',
    color: '#181818',
    Icon: IoLogoJavascript
  },
  'html': {
    link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    background: '#DD4B25',
    color: '#FFF',
    Icon: IoLogoHtml5
  },
  'css': {
    link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
    background: '#254BDD',
    color: '#FFF',
    Icon: IoLogoCss3
  },
  'json': {
    link: 'https://www.json.org/json-pt.html',
    background: '#D1D9E6',
    color: '#000',
    Icon: VscJson
  },
  'dotenv': {
    link: 'https://www.dotenv.org/',
    background: '#ECD53F',
    color: '#000',
    Icon: SiDotenv
  },
  'express': {
    link: 'https://www.dotenv.org/',
    background: '#FFF',
    color: '#000',
    Icon: SiExpress
  },
  'ux/ui': {
    link: 'https://brasil.uxdesign.cc/',
    background: '#4AAEFE',
    color: '#FFF',
    Icon: BiBookContent
  },
  'ia': {
    link: 'https://www.google.com/search?q=inteligencia+artificial',
    background: '#8942A8',
    color: '#FFF',
    Icon: TbBrain
  },
  'jest': {
    link: 'https://jestjs.io/pt-BR/',
    background: '#15C213',
    color: '#FFF',
    Icon: SiJest
  },
  'next': {
    link: 'https://nextjs.org/',
    background: '#000',
    color: '#FFF',
    Icon: TbBrandNextjs
  }
}