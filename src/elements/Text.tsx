import { ReactNode } from 'react'

type TextTypes = { children: ReactNode; className?: string }

export function Text({ children, className = '' }: TextTypes) {
  return <p className={`m-0 p-0 text-black text-base ${className}`}>{children}</p>
}

export function HeadingOne({ children, className = '' }: TextTypes) {
  return <h1 className={`m-0 p-0 text-black text-6xl ${className}`}>{children}</h1>
}

export function HeadingTwo({ children, className = '' }: TextTypes) {
  return <h2 className={`m-0 p-0 text-primary text-4xl ${className}`}>{children}</h2>
}
