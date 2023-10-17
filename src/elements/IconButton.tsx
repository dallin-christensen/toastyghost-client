import Button from './Button'
import { ButtonHTMLAttributes } from 'react'

type Props = {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function IconButton({ children, onClick, ...rest }: Props) {
  return (
    <Button onClick={onClick} className="rounded-xl px-3 py-3" {...rest}>
      {children}
    </Button>
  )
}
