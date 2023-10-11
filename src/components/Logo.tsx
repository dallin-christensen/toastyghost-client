import GhostSVG from '../assets/ghost.svg?react' // eslint-disable-line import/no-unresolved
import styled from '@emotion/styled'

const SIZES = Object.freeze({
  small: 4,
  medium: 10,
  large: 20,
})

type OutterCircleProps = {
  size: 4 | 10 | 20
}

const OutterCircle = styled.div<OutterCircleProps>`
  background-color: #673ab7;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.size * 18}px;
  min-height: ${(props) => props.size * 18}px;
  width: ${(props) => props.size * 18}px;
  min-width: ${(props) => props.size * 18}px;
  border-radius: ${(props) => props.size * 9}px;

  .dark {
    fill: #111;
  }

  .ghost {
    width: ${(props) => props.size * 11}px;
    height: ${(props) => props.size * 12}px;
    filter: drop-shadow(5px 5px 0px rgb(0 0 0 / 0.4));
    /* animation: float 3s ease-in-out infinite; */
    animation-name: hover2;
    animation-duration: 1.5s;
    animation-delay: 0.3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes hover2 {
    50% {
      transform: translateY(-${(props) => props.size / 2}px);
    }
    100% {
      transform: translateY(-${(props) => props.size}px);
    }
  }
`

type LogoProps = {
  size?: keyof typeof SIZES
}

function Logo({ size = 'medium' }: LogoProps) {
  const base = SIZES[size]
  return (
    <OutterCircle size={base}>
      <GhostSVG />
    </OutterCircle>
  )
}

export default Logo
