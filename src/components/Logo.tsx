import GhostSVG from '../assets/ghost.svg?react' // eslint-disable-line import/no-unresolved

const outterCircleClasses = {
  small: 'h-20 min-h-20 w-20 min-w-20 [&>svg]:w-11 [&>svg]:h-12 [&>svg]:animate-hover-small',
  medium: 'h-44 min-h-44 w-44 min-w-44 [&>svg]:w-28 [&>svg]:h-28 [&>svg]:animate-hover-medium',
  large: 'h-20 min-h-80 w-80 min-w-80 [&>svg]:w-56 [&>svg]:h-56 [&>svg]:animate-hover-large',
}

type LogoProps = {
  size?: 'small' | 'medium' | 'large'
}

function Logo({ size = 'medium' }: LogoProps) {
  return (
    <div className={`bg-primary flex items-center justify-center rounded-full ${outterCircleClasses[size]}`}>
      <GhostSVG />
    </div>
  )
}

export default Logo
