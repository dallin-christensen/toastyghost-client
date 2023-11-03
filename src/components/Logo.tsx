import GhostSVG from '../assets/ghost.svg?react' // eslint-disable-line import/no-unresolved

const outterCircleClasses = {
  small: 'h-20 min-h-20 w-20 min-w-20 [&>svg]:w-11 [&>svg]:h-12 [&>svg]:animate-hover-small',
  medium: 'h-44 min-h-44 w-44 min-w-44 [&>svg]:w-28 [&>svg]:h-28 [&>svg]:animate-hover-medium',
  large: 'h-44 min-h-44 w-44 min-w-44 [&>svg]:w-28 [&>svg]:h-28 [&>svg]:animate-hover-medium md:h-44 md:min-h-80 md:w-80 md:min-w-80 md:[&>svg]:w-56 md:[&>svg]:h-56 md:[&>svg]:animate-hover-large',
}

type LogoProps = {
  size?: 'small' | 'medium' | 'large'
}

function Logo({ size = 'medium' }: LogoProps) {
  return (
    <div
      className={`bg-primary flex items-center justify-center rounded-full shadow-brutal border-2 border-black ${outterCircleClasses[size]}`}
    >
      <GhostSVG />
    </div>
  )
}

export default Logo
