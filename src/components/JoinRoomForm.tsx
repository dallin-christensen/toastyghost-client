import { useState, SyntheticEvent } from 'react';
import RoomType from '../data/types/RoomType';
import ParticipantType from '../data/types/ParticipantType';
import { useParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import fetchWithHeaders from '../utilities/fetchWithHeaders';
import { useCurrentUser } from '../context/UserContext';
import { useRoom } from '../context/RoomContext';
import Button from '../elements/Button';
import TextInput from '../elements/TextInput';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled'
import ExteriorPageTemplate from './ExteriorPageTemplate';

const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
`

const WithinForm = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  gap: 1em;
`

function JoinRoomForm() {
  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const { roomId } = useParams()
  const { setCurrentUser } = useCurrentUser()
  const { setRoom } = useRoom()

  const mutation = useMutation({
    mutationFn: async () => {
      return await fetchWithHeaders("http://localhost:8082/api/rooms/joinRoom", {
        roomId,
        participant: {
          avatar: "avatarblah",
          handle: username
        }
      })
    },
    onSuccess: ({room, participant}: { room: RoomType, participant: ParticipantType }) => {
      if (room?._id) {
        setCurrentUser(participant)
        setRoom(room)
      }
    },
  })

  const onFinish = (e: SyntheticEvent) => {
    e.preventDefault()
    let validationApproved = true

    if (!username) {
      setUsernameError("Required field")
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
    setUsernameError("")
    if (validateInput(value)) {
      setUsername(value)
    }
  }

  return (
    <ExteriorPageTemplate>
      <Wrapper>
        <form onSubmit={onFinish}>
          <WithinForm>
            <Typography variant='h3'  sx={{ color: 'primary.main', marginBottom: "2rem", fontWeight: 400 }}>Join Room</Typography>
            <TextInput autoFocus label="User Nickname" value={username} onChange={e => updateUsername(e.target.value)} error={!!usernameError} helperText={usernameError} />
            <Button type="submit">Submit</Button>
          </WithinForm>
        </form>
      </Wrapper>
    </ExteriorPageTemplate>
  )
}

export default JoinRoomForm