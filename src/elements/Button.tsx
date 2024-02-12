import { ButtonHTMLAttributes } from 'react'

type Props = {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const interactionClasses = `
transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none disabled:translate-x-[3px] disabled:translate-y-[3px] disabled:shadow-none disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-500 focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none
`

const darkInteractionClasses = `
dark:transition-all dark:hover:translate-x-[3px] dark:hover:translate-y-[3px] dark:hover:shadow-none dark:disabled:translate-x-[3px] dark:disabled:translate-y-[3px] dark:disabled:shadow-none dark:disabled:bg-gray-300 dark:disabled:white dark:disabled:white dark:focus:translate-x-[3px] dark:focus:translate-y-[3px] dark:focus:shadow-none
`

export default function Button({ children, onClick, className, ...rest }: Props) {
  return (
    <button
      aria-label="Click to perform an action"
      onClick={onClick}
      className={`flex cursor-pointer items-center rounded-md border-2 border-black text-black dark:text-white dark:border-white bg-primary px-10 py-3 font-bold shadow-brutal dark:shadow-brutaldark ${interactionClasses} ${darkInteractionClasses} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
