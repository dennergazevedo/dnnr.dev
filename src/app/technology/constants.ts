import { FaReact, FaDocker, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript, IoLogoNodejs, IoLogoPython, IoLogoCss3 } from "react-icons/io";
import { SiDjango } from 'react-icons/si';

export const techInfo: ITechCard[] = [
  {
    title: 'ReactJS + Native',
    subtitle: 'Typescript, Next, Gatsby & mais',
    link: 'https://react.dev/',
    Icon: FaReact,
    background: '#087EA4',
    color: '#FFF',
    text: 'Biblioteca JavaScript para criação de interfaces de usuário interativas e reativas. Componentes reutilizáveis e atualização eficiente de dados são seus pontos fortes.',
  },
  {
    title: 'NodeJS',
    subtitle: 'APIs, Integrações, Testes & mais',
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
  },
  {
    title: 'Docker',
    subtitle: 'Containers, Images, CI/CD & mais',
    link: 'https://www.docker.com/',
    Icon: FaDocker,
    background: '#003F8C',
    color: '#FFF',
    text: 'Plataforma de virtualização de contêineres que permite empacotar, distribuir e executar aplicativos de forma isolada, facilitando a implantação e o gerenciamento de ambientes de desenvolvimento e produção.',
  },
  {
    title: 'Django REST',
    subtitle: 'APIs & Auth',
    link: 'https://www.django-rest-framework.org/',
    Icon: SiDjango,
    background: '#FFF',
    color: '#000',
    text: 'Extensão do framework Django que facilita a criação de APIs RESTful em Python. Ele fornece ferramentas e funcionalidades para desenvolver rapidamente APIs robustas e escaláveis.',
  },
  {
    title: 'Python',
    subtitle: 'APIs & Auth',
    link: 'https://www.python.org/',
    Icon: IoLogoPython,
    background: '#3975A5',
    color: '#FFF',
    text: 'Linguagem de programação de alto nível, conhecida por sua simplicidade e legibilidade. É amplamente utilizado em desenvolvimento web, análise de dados, automação, inteligência artificial e outras áreas.',
  },
  {
    title: 'HTML5',
    subtitle: 'Linguagem de Marcação',
    link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    Icon: FaHtml5,
    background: '#D84924',
    color: '#FFF',
    text: 'Linguagem de marcação utilizada para estruturar e exibir conteúdo na web. Ele traz recursos avançados, como suporte a áudio/vídeo nativo, gráficos vetoriais, armazenamento local e melhor semântica.',
  },
  {
    title: 'CSS3',
    subtitle: 'Estilização',
    link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
    Icon: IoLogoCss3,
    background: '#3492CB',
    color: '#FFF',
    text: 'Linguagem de estilo usada para definir a apresentação visual de documentos HTML. Com o CSS, é possível controlar layout, cores, fontes, espaçamento e outros aspectos visuais, melhorando a aparência e a usabilidade das páginas da web.',
  }
]