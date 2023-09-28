import { useRoom } from "../context/RoomContext"
import useSetRoom from "../hooks/useSetRoom"
import PostMessageInput from "../components/PostMessageInput"
import useSocketConnect from "../hooks/useSocketConnect"


function Room() {

  useSetRoom()
  useSocketConnect()

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