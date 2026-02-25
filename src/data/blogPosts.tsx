import type { ReactNode } from 'react'

export interface BlogPost {
  id: number
  title: string
  content: ReactNode
  author: string
  datePosted: string
  image?: string
  imagePlaceholderGradient?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with React and TypeScript',
    author: 'Nathan Coelho',
    datePosted: 'February 2026',
    imagePlaceholderGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    content: (
      <p>
        React and TypeScript are a powerful combination for building robust web applications.
        TypeScript's static typing catches errors at compile time, making large codebases much
        easier to maintain and refactor with confidence. Vite makes setup effortless — run{' '}
        <code>npm create vite@latest</code>, pick the React + TypeScript template, and you're
        writing components in under a minute.
      </p>
    ),
  },
  {
    id: 2,
    title: 'What Civil Engineering Taught Me About Software',
    author: 'Nathan Coelho',
    datePosted: 'January 2026',
    imagePlaceholderGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    content: (
      <p>
        Five years working in civil engineering gave me a different lens through which to see
        software development. You don't pour concrete before the design is signed off — and you
        shouldn't write code before you understand the problem. Risk management, clear stakeholder
        communication, and knowing when to ask for a second opinion all transfer directly from
        the construction site to the IDE.
      </p>
    ),
  },
  {
    id: 3,
    title: 'Building Real-Time Features with WebSockets',
    author: 'Nathan Coelho',
    datePosted: 'December 2025',
    imagePlaceholderGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    content: (
      <p>
        Building Catan Online taught me more about WebSockets than any tutorial ever could.
        When you need the server to push updates the instant a player rolls the dice, HTTP
        polling simply doesn't cut it. A persistent full-duplex channel, a connection registry
        keyed by game ID, and an asyncio lock to prevent race conditions during setup — that's
        the short version of what makes real-time multiplayer work reliably.
      </p>
    ),
  },
]
