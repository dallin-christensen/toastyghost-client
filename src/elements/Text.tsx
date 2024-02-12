import { ReactNode } from 'react'

type TextTypes = { children: ReactNode; className?: string }

export function Text({ children, className = '' }: TextTypes) {
  return <p className={`m-0 p-0 text-black dark:text-white text-base ${className}`}>{children}</p>
}

export function HeadingOne({ children, className = '' }: TextTypes) {
  return <h1 className={`m-0 p-0 text-black dark:text-white text-5xl md:text-6xl ${className}`}>{children}</h1>
}

export function HeadingTwo({ children, className = '' }: TextTypes) {
  return (
    <h2 className={`m-0 p-0 text-black dark:text-white text-3xl md:text-4xl font-medium ${className}`}>{children}</h2>
  )
}
