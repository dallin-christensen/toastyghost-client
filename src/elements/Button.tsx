import { ButtonHTMLAttributes } from 'react'

type Props = {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, onClick, className, ...rest }: Props) {
  return (
    <button
      aria-label="Click to perform an action"
      onClick={onClick}
      className={`flex cursor-pointer items-center rounded-md border-2 border-black bg-primary px-10 py-3 font-bold shadow-brutal transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none disabled:translate-x-[3px] disabled:translate-y-[3px] disabled:shadow-none disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-500 focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
