import { useRoom } from '../context/RoomContext'
import { useCurrentUser } from '../context/UserContext'
import JoinRoomForm from '../components/JoinRoomForm'
import SubscribedRoom from '../components/SubscribedRoom'
import { useQuery } from '@tanstack/react-query'
import fetchWithHeaders from '../utilities/fetchWithHeaders'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import RoomType from '../data/types/RoomType'
import { useLoading } from '../context/LoadingScreenContext'

type ResponseType = RoomType | string

function Room() {
  const { roomId = '' } = useParams()
  const { currentUser } = useCurrentUser()

  const [grantAccess, setGrantAccess] = useState(false)

  const { loading, setLoading } = useLoading()

  const { setRoom } = useRoom()

  useQuery({
    queryKey: ['participantroomlookup', currentUser?._id],
    queryFn: async () => {
      return await fetchWithHeaders('/api/rooms/participantroomlookup', {
        roomId,
        participantId: currentUser?._id,
      })
    },
    onSuccess: (response: ResponseType) => {
      if (typeof response !== 'string') {
        if (response._id) {
          setGrantAccess(true)
          setRoom(response)
        }
      }
      setLoading(false)
    },
    onError: () => {
      setLoading(false)
    },
    enabled: !!currentUser?._id,
  })

  if (loading) return null

  return grantAccess ? <SubscribedRoom /> : <JoinRoomForm />
}

export default Room
