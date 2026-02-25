import catanOnlineImg from '../assets/CatanOnline.png'

export interface Project {
  id: number
  name: string
  description: string
  tags: string[]
  datePosted: string
  image?: string
  imagePlaceholderGradient?: string
  link: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Catan Online',
    description:
      'Catan Online is a multiplayer full stack web application for playing the timeless classic board game Settlers of Catan by Klaus Teuber.',
    tags: ['React', 'TypeScript', 'Python FastAPI', 'WebSocket'],
    datePosted: 'January 2026',
    image: catanOnlineImg,
    link: 'https://catan-frontend-deploy.onrender.com/',
  },
  {
    id: 2,
    name: 'Doc Lures Webscraper',
    description:
    'Identified two new sandflat fishing strategies by using Selenium to scrape 650 publicly available lure fishing podcast episode summaries, and an LLM to identify common themes across presenter advice.',
    tags: ['Python', 'Selenium', 'Pandas'],
    datePosted: 'June 2025',
    imagePlaceholderGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    link: 'https://github.com/TopWater1932/Doc-Lures-Webscraper',
  },
  {
    id: 3,
    name: 'User Friendly CRM (Under Development)',
    description:
      'TBC',
    tags: ['React', 'TypeScript','Node.js', 'PostgresQL', 'RESTful API'],
    datePosted: 'March 2025',
    imagePlaceholderGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    link: '#',
  },
]
