import { SiVtex } from 'react-icons/si'
import { IoLogoJavascript, IoLogoNodejs, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import { FaReact, FaDocker } from 'react-icons/fa'
import { VscJson } from 'react-icons/vsc'

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
}