import { useRoom } from "../context/RoomContext"
import useFetchRoom from "../hooks/useFetchRoom"
import { useCurrentUser } from "../context/UserContext"
import currentUserInRoom from "../utilities/currentUserInRoom"
import JoinRoomForm from "../components/JoinRoomForm"
import SubscribedRoom from "../components/SubscribedRoom"

function Room() {

  useFetchRoom()

  const { currentUser } = useCurrentUser()

  const { room } = useRoom()

  const currentUserIsParticipant = currentUserInRoom(currentUser ?? undefined, room ?? undefined)

  return currentUserIsParticipant
          ? <SubscribedRoom />
          : <JoinRoomForm />
}

export default Room