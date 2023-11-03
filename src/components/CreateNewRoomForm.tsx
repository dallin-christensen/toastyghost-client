import { useMutation } from '@tanstack/react-query'
import { SyntheticEvent, useState } from 'react'
import RoomType from '../data/types/RoomType'
import ParticipantType from '../data/types/ParticipantType'
import { useNavigate } from 'react-router-dom'
import { useCurrentUser } from '../context/UserContext'
import fetchWithHeaders from '../utilities/fetchWithHeaders'
import Button from '../elements/Button'
import TextInput from '../elements/TextInput'
import LoadingScreen from './LoadingScreen'
import ExteriorPageTemplate from './ExteriorPageTemplate'
import { HeadingTwo } from '../elements/Text'

function CreateNewRoomForm() {
  const [roomName, setRoomName] = useState('')
  const [roomError, setRoomError] = useState('')
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const navigate = useNavigate()
  const { setCurrentUser } = useCurrentUser()

  const mutation = useMutation({
    mutationFn: async () => {
      return await fetchWithHeaders('/api/rooms/createroom', {
        name: roomName,
        participants: [
          {
            avatar: 'avatarblah',
            handle: username,
          },
        ],
      })
    },
    onSuccess: ({ room, participant }: { room: RoomType; participant: ParticipantType }) => {
      if (room?._id) {
        setCurrentUser(participant)
        navigate(`/room/${room?._id}`)
      }
    },
  })

  const onFinish = (e: SyntheticEvent) => {
    e.preventDefault()
    let validationApproved = true

    if (!roomName) {
      setRoomError('Required field')
      validationApproved = false
    }

    if (!username) {
      setUsernameError('Required field')
      validationApproved = false
    }

    if (validationApproved) {
      mutation.mutate()
    }
  }

  const validateInput = (value: string) => {
    const alphaNumbericAndSymbols = /^[A-Za-z0-9_@./#&+-]*$/
    return value.match(alphaNumbericAndSymbols)
  }

  const updateUsername = (value: string) => {
    setUsernameError('')
    if (validateInput(value)) {
      setUsername(value)
    }
  }

  const updateRoomName = (value: string) => {
    setRoomError('')
    setRoomName(value)
  }

  if (mutation.isLoading) return <LoadingScreen />

  return (
    <ExteriorPageTemplate>
      <div className="flex justify-center bg-backgroundsecondary border-2 border-black shadow-brutal p-8 rounded-md mb-2">
        <form onSubmit={onFinish}>
          <div className="flex items-start justify-center flex-col gap-4 md:w-96">
            <HeadingTwo className="mb-4">Create New Room</HeadingTwo>
            <TextInput
              autoFocus
              placeholder="Room Name"
              value={roomName}
              onChange={(e) => updateRoomName(e.target.value)}
              error={roomError}
            />
            <TextInput
              placeholder="User Nickname"
              value={username}
              onChange={(e) => updateUsername(e.target.value)}
              error={usernameError}
            />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </ExteriorPageTemplate>
  )
}

export default CreateNewRoomForm
