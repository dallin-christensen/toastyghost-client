import { useRoom } from "../context/RoomContext"
import { useEventListener } from 'usehooks-ts'
import useSocketEventEmissions from "../hooks/useSocketEventEmissions"
import { useCurrentUser } from "../context/UserContext"
import MotionAvatar from "./MotionAvatar"

function Canvas() {
  const { room } = useRoom()
  const { currentUser } = useCurrentUser()
  const { emitUpdateCoordinates } = useSocketEventEmissions()

  const onClick = (e: MouseEvent) => {
    if (room?._id && currentUser?._id) {
      emitUpdateCoordinates({ roomId: room._id, participantId: currentUser._id, x: e.clientX, y: e.clientY })
    }
  }

  useEventListener('click', onClick)

  if (!room) return null

  const { participants } = room

  return (
    <div style={{ backgroundColor: 'red', height: '100%', width: '100%' }}>
      {
        participants.map((p) => (
          <MotionAvatar participant={p} />
        ))
      }
    </div>
  )
}

export default Canvas