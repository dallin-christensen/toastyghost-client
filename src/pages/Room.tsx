import { useRoom } from "../context/RoomContext"
import useSetRoom from "../hooks/useSetRoom"
import PostMessageInput from "../components/PostMessageInput"
import useSocketConnect from "../hooks/useSocketConnect"
import { useCurrentUser } from "../context/UserContext"
import currentUserInRoom from "../utilities/currentUserInRoom"

function Room() {

  useSetRoom()
  useSocketConnect()

  const { currentUser } = useCurrentUser()

  const {
    room
  } = useRoom()

  if (!room || !currentUser) return null

  const currentUserIsParticipant = currentUserInRoom(currentUser, room)

  return currentUserIsParticipant ? (
          <>
            <pre>{JSON.stringify(room, undefined, 2)}</pre>
            <PostMessageInput />
          </>
        ) : (
          <div>join room?</div>
        )
}

export default Room