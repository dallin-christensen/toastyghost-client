import { useRoom } from '../context/RoomContext'
import { useEventListener } from 'usehooks-ts'
import useSocketEventEmissions from '../hooks/useSocketEventEmissions'
import { useCurrentUser } from '../context/UserContext'
import MotionAvatar from './MotionAvatar'

function Canvas() {
  const { room } = useRoom()
  const { currentUser } = useCurrentUser()
  const { emitUpdateCoordinates } = useSocketEventEmissions()

  const onClick = (e: MouseEvent) => {
    let registerClick = true
    const unregisteredElements = Array.from(document.querySelectorAll('.dont-register-avatar-movement'))

    const target = e.target as Node

    unregisteredElements.forEach((unregistered) => {
      if (unregistered.contains(target)) {
        registerClick = false
      }
    })

    if (!registerClick) return

    if (room?._id && currentUser?._id) {
      emitUpdateCoordinates({ roomId: room._id, participantId: currentUser._id, x: e.clientX, y: e.clientY })
    }
  }

  useEventListener('click', onClick)

  if (!room) return null

  const { participants } = room

  return (
    <div style={{ height: '100%', width: '100%' }}>
      {participants.map((p) => (
        <MotionAvatar participant={p} key={p._id} />
      ))}
    </div>
  )
}

export default Canvas
