import { useMutation } from '@tanstack/react-query';
import { SyntheticEvent, useState } from 'react';
import RoomType from '../data/types/RoomType';
import ParticipantType from '../data/types/ParticipantType';
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from '../context/UserContext';
import fetchWithHeaders from '../utilities/fetchWithHeaders';
import Button from '../elements/Button';
import TextInput from '../elements/TextInput';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled'

const Wrapper = styled(Box)`
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 200px;
`

const WithinForm = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  gap: 1em;
`

function CreateNewRoomForm() {
  const [roomName, setRoomName] = useState("")
  const [roomError, setRoomError] = useState("")
  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const navigate = useNavigate();
  const { setCurrentUser } = useCurrentUser()

  const mutation = useMutation({
    mutationFn: async () => {
      return await fetchWithHeaders("http://localhost:8082/api/rooms/createroom", {
        name: roomName,
          participants: [
            {
              avatar: "avatarblah",
              handle: username
            }
          ]
      })
    },
    onSuccess: ({room, participant}: { room: RoomType, participant: ParticipantType }) => {
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
      setRoomError("Required field")
      validationApproved = false
    }

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

  const updateRoomName = (value: string) => {
    setRoomError("")
    setRoomName(value)
  }

  return (
    <Wrapper>
      <form onSubmit={onFinish}>
        <WithinForm>
          <Typography variant='h3' sx={{ color: 'primary.main', marginBottom: "2rem" }}>Create New Room</Typography>
          <TextInput label="Room Name" value={roomName} onChange={e => updateRoomName(e.target.value)} error={!!roomError} helperText={roomError} />
          <TextInput label="User Nickname" value={username} onChange={e => updateUsername(e.target.value)} error={!!usernameError} helperText={usernameError} />
          <Button type="submit">Submit</Button>
        </WithinForm>
      </form>
    </Wrapper>
  )
}

export default CreateNewRoomForm