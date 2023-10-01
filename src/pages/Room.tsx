import { useRoom } from "../context/RoomContext"
import useFetchRoom from "../hooks/useFetchRoom"
import { useCurrentUser } from "../context/UserContext"
import currentUserInRoom from "../utilities/currentUserInRoom"
import JoinRoomForm from "../components/JoinRoomForm"
import SubscribedRoom from "../components/SubscribedRoom"
import Header from "../components/Header"

function Room() {

  useFetchRoom()

  const { currentUser } = useCurrentUser()

  const {
    room
  } = useRoom()

  if (!room) return null

  const currentUserIsParticipant = currentUserInRoom(currentUser ?? undefined, room)

  return (
    <>
      <Header withLogo />
      {
        currentUserIsParticipant
          ? <SubscribedRoom />
          : <JoinRoomForm />
      }
    </>
  )
}

export default Room