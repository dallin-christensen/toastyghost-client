import React, { useState } from "react"
import debounce from "../utilities/debounce"
import { useRoom } from "../context/RoomContext"
import { useCurrentUser } from "../context/UserContext"
import TextInput from "../elements/TextInput"
import IconButton from "../elements/IconButton"
import SendIcon from '@mui/icons-material/Send';
import { Tooltip } from "@mui/material"
import useSocketEventEmissions from "../hooks/useSocketEventEmissions"

function PostMessageInput() {
  const [messageVal, setMessageVal] = useState('')
  const [messageValError, setMessageValError] = useState('')
  const { room } = useRoom()
  const { currentUser } = useCurrentUser()

  const {
    emitInsertMessage
  } = useSocketEventEmissions()

  const handlePostMessage = debounce(async () => {
    if (room?._id && currentUser?._id) {
      emitInsertMessage({
        roomId: room?._id,
        participantId: currentUser?._id,
        text: messageVal,
      })
    }
    setMessageVal("")
  })

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && messageVal.length) {
      handlePostMessage()
    }
  }

  const handleSetMessage = (val: string) => {
    if(val.length <= 256) {
      setMessageValError('')
      setMessageVal(val)
    } else {
      setMessageValError('reached max character limit (256)')
    }
  }

  return (
    <>
      <TextInput
        autoFocus
        label="message"
        value={messageVal}
        onChange={e => handleSetMessage(e.target.value)}
        onKeyDown={handleEnter}
        error={!!messageValError}
        helperText={messageValError}
        sx={{ maxWidth: 400 }}
      />
      <Tooltip title="send message" placement="top" arrow>
        <div>
          <IconButton onClick={handlePostMessage} disabled={!messageVal}>
            <SendIcon />
          </IconButton>
        </div>
      </Tooltip>
    </>
  )
}

export default PostMessageInput