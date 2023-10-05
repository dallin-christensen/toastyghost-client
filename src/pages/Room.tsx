import { useRoom } from "../context/RoomContext"
import { useCurrentUser } from "../context/UserContext"
import JoinRoomForm from "../components/JoinRoomForm"
import SubscribedRoom from "../components/SubscribedRoom"
import { useQuery } from "@tanstack/react-query"
import fetchWithHeaders from "../utilities/fetchWithHeaders"
import { useParams } from "react-router-dom"
import { useState } from "react"

function Room() {
  const [grantAccess, setGrantAccess] = useState(false)
  const { roomId = "" } = useParams()

  const { currentUser } = useCurrentUser()

  const { setRoom } = useRoom()

  const { isLoading } = useQuery({
    queryKey: ['participantroomlookup', currentUser?._id],
    queryFn: async () => {
      return await fetchWithHeaders("http://localhost:8082/api/rooms/participantroomlookup", {
        roomId,
        participantId: currentUser?._id ?? "" //TODO fix this, the request should never happen if user is not set
      })
    },
    onSuccess: (response: any) => {
      if (typeof response !== 'string') {
        if (response._id) {
          setRoom(response)
          setGrantAccess(true)
        }
      }
    },
    enabled: !!currentUser?._id,
  })

  if (isLoading) return <div>is loading....</div>

  return grantAccess
          ? <SubscribedRoom />
          : <JoinRoomForm />
}

export default Room