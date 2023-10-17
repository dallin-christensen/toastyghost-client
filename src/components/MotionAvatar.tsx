import ParticipantType from '../data/types/ParticipantType'
import { useState, useEffect } from 'react'
import { useSpring, animated } from '@react-spring/web'
import Avatar from './Avatar'

type MotionAvatarProps = {
  participant: ParticipantType
}

function MotionAvatar({ participant: p }: MotionAvatarProps) {
  const [coord, setCoord] = useState({ from: { x: 0, y: 0 }, to: { x: p.x, y: p.y } })

  useEffect(() => {
    setCoord((currentCoord) => {
      return {
        from: {
          x: currentCoord.from.x,
          y: currentCoord.from.y,
        },
        to: {
          x: p.x,
          y: p.y,
        },
      }
    })
  }, [p.x, p.y])

  const springs = useSpring({
    from: { top: coord.from.x, left: coord.from.x },
    to: { top: coord.to.y, left: coord.to.x },
  })

  return (
    <animated.div
      style={{
        position: 'absolute',
        ...springs,
      }}
    >
      <Avatar participant={p} />
    </animated.div>
  )
}

export default MotionAvatar
