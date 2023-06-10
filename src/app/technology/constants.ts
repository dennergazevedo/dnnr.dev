import { FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";

export const techInfo: ITechCard[] = [
  {
    title: 'ReactJS',
    subtitle: 'Typescript, Next & Gatsby',
    link: 'https://react.dev/',
    Icon: FaReact,
    background: '#087EA4',
    color: '#FFF',
    text: 'Biblioteca JavaScript para criação de interfaces de usuário interativas e reativas. Componentes reutilizáveis e atualização eficiente de dados são seus pontos fortes.',
  },
  {
    title: 'NodeJS',
    subtitle: 'Express, Sequelize, Jest, Webpack & mais...',
    link: 'https://nodejs.org/',
    Icon: IoLogoNodejs,
    background: '#5FA04E',
    color: '#FFF',
    text: 'Plataforma de desenvolvimento em JavaScript que permite executar código no servidor. É escalável, eficiente e amplamente usado para criar aplicativos web e APIs rápidas e em tempo real.',
  },
  {
    title: 'JavaScript',
    subtitle: 'DOM, JQuery, SPAs & PWAs',
    link: 'https://www.javascript.com/',
    Icon: IoLogoJavascript,
    background: '#FCDC00',
    color: '#000',
    text: 'Linguagem de programação de alto nível, amplamente utilizada no desenvolvimento web. É essencial para criar aplicativos web modernos e interativos.',
  }
]