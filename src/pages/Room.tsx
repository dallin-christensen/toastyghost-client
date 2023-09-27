import { useRoom } from "../context/RoomContext"
import useSetRoom from "../hooks/useSetRoom"
import PostMessageInput from "../components/PostMessageInput"


function Room() {

  useSetRoom()

  const {
    room
  } = useRoom()

  return (
    <>
      <pre>{JSON.stringify(room, undefined, 2)}</pre>
      <PostMessageInput />
    </>
  )
}

export default Room