import { useRoom } from "../context/RoomContext"
import useSetRoom from "../hooks/useSetRoom"

function Room() {
  useSetRoom()

  const {
    room
  } = useRoom()

  return (
    <pre>{JSON.stringify(room, undefined, 2)}</pre>
  )
}

export default Room