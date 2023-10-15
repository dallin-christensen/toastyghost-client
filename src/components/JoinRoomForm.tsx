import { useState, SyntheticEvent } from 'react'
import RoomType from '../data/types/RoomType'
import ParticipantType from '../data/types/ParticipantType'
import { useParams } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import fetchWithHeaders from '../utilities/fetchWithHeaders'
import { useCurrentUser } from '../context/UserContext'
import Button from '../elements/Button'
import TextInput from '../elements/TextInput'
import { Typography } from '@mui/material'
import ExteriorPageTemplate from './ExteriorPageTemplate'
import { useSnackbar } from '../context/SnackbarContext'

function JoinRoomForm() {
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const { roomId } = useParams()
  const { setCurrentUser } = useCurrentUser()
  const { triggerSnackbar } = useSnackbar()

  const mutation = useMutation({
    mutationFn: async () => {
      return await fetchWithHeaders('/api/rooms/joinroom', {
        roomId,
        participant: {
          avatar: 'avatarblah',
          handle: username,
        },
      }).catch(() => console.log('in catch block'))
    },
    onSuccess: ({ room, participant, errors }: { room: RoomType; participant: ParticipantType; errors: Error[] }) => {
      if (errors?.length) {
        if (errors[0].message === 'room does not exist') {
          triggerSnackbar('room does not exist', 'error')
        } else {
          triggerSnackbar('an error occurred', 'error')
        }
        return
      }

      if (room?._id) {
        setCurrentUser(participant)
      }
    },
    onError: () => {
      triggerSnackbar('an error occurred', 'error')
    },
  })

  const onFinish = (e: SyntheticEvent) => {
    e.preventDefault()
    let validationApproved = true

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

  return (
    <ExteriorPageTemplate>
      <div className="flex justify-center">
        <form onSubmit={onFinish}>
          <div className="flex items-start justify-center flex-col w-96 gap-4">
            <Typography variant="h3" sx={{ color: 'primary.main', marginBottom: '2rem', fontWeight: 400 }}>
              Join Room
            </Typography>
            <TextInput
              autoFocus
              label="User Nickname"
              value={username}
              onChange={(e) => updateUsername(e.target.value)}
              error={!!usernameError}
              helperText={usernameError}
            />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </ExteriorPageTemplate>
  )
}

export default JoinRoomForm
