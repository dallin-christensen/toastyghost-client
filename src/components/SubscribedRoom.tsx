import { useRoom } from "../context/RoomContext"
import useSocketConnect from "../hooks/useSocketConnect"
import useSocketEventListeners from "../hooks/useSocketEventListeners"
import PostMessageInput from "./PostMessageInput"

function SubscribedRoom() {
  useSocketConnect()
  useSocketEventListeners()

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

export default SubscribedRoom