export interface Project {
  id: number
  name: string
  description: string
  tags: string[]
  datePosted: string
  imagePlaceholderGradient: string
  link: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Project Name',
    description:
      'A brief description of what this project does and the problem it solves. Replace with your actual project details and highlight what makes it interesting.',
    tags: ['React', 'TypeScript', 'REST API'],
    datePosted: 'January 2025',
    imagePlaceholderGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    link: '#',
  },
  {
    id: 2,
    name: 'Another Project',
    description:
      'Describe your second project here. What technologies did you use? What was the outcome? What did you learn from building it?',
    tags: ['Node.js', 'Database', 'Vibe-coded'],
    datePosted: 'March 2025',
    imagePlaceholderGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    link: '#',
  },
  {
    id: 3,
    name: 'Third Project',
    description:
      'A short, compelling description of your third project. What makes it worth showcasing? What problem does it solve for real users?',
    tags: ['Python', 'Machine Learning', 'Data Science'],
    datePosted: 'June 2025',
    imagePlaceholderGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    link: '#',
  },
]
