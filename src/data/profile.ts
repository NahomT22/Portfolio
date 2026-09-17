export const profile = {
  name: 'Your Name',
  role: 'Software Engineer',
  tagline: 'I build fast, accessible web applications.',
  bio: 'A short paragraph about who you are, what you work on, and what you care about as an engineer. Replace this with your own story.',
  email: 'you@example.com',
  social: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
  },
}

export type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
  repo?: string
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A short description of the project and the problem it solves.',
    tags: ['React', 'TypeScript', 'Vite'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Project Two',
    description: 'A short description of the project and the problem it solves.',
    tags: ['Node.js', 'Express', 'PostgreSQL'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Project Three',
    description: 'A short description of the project and the problem it solves.',
    tags: ['Python', 'Data'],
    link: '#',
    repo: '#',
  },
]

export const skills = [
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'SQL',
  'Git',
  'Tailwind CSS',
  'REST APIs',
]
