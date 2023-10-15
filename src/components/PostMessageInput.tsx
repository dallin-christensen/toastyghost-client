import React, { useRef, useState } from 'react'
import debounce from '../utilities/debounce'
import { useRoom } from '../context/RoomContext'
import { useCurrentUser } from '../context/UserContext'
import TextInput from '../elements/TextInput'
import IconButton from '../elements/IconButton'
import SendIcon from '@mui/icons-material/Send'
import { Tooltip } from '@mui/material'
import useSocketEventEmissions from '../hooks/useSocketEventEmissions'
import { useEventListener } from 'usehooks-ts'

function PostMessageInput() {
  const [messageVal, setMessageVal] = useState('')
  const [messageValError, setMessageValError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const { room } = useRoom()
  const { currentUser } = useCurrentUser()

  const { emitInsertMessage } = useSocketEventEmissions()

  const handlePostMessage = debounce(async () => {
    if (room?._id && currentUser?._id) {
      emitInsertMessage({
        roomId: room?._id,
        participantId: currentUser?._id,
        text: messageVal,
      })
    }
    setMessageVal('')
  })

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && messageVal.length) {
      handlePostMessage()
    }
  }

  const handleSetMessage = (val: string) => {
    if (val.length <= 256) {
      setMessageValError('')
      setMessageVal(val)
    } else {
      setMessageValError('reached max character limit (256)')
    }
  }

  const keydownListener = (e: KeyboardEvent) => {
    const isFocusedOnInput = document.activeElement === inputRef.current

    if (e.key === '/' && !isFocusedOnInput) {
      inputRef.current?.focus()
      e.preventDefault()
    }
  }

  useEventListener('keydown', keydownListener)

  return (
    <>
      <TextInput
        autoFocus
        label={'message - Press "/" to auto-focus'}
        value={messageVal}
        onChange={(e) => handleSetMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        error={!!messageValError}
        helperText={messageValError}
        sx={{ maxWidth: 460 }}
        inputRef={inputRef}
      />
      <Tooltip title="send message" placement="top" arrow>
        <IconButton onClick={handlePostMessage} disabled={!messageVal}>
          <SendIcon />
        </IconButton>
      </Tooltip>
    </>
  )
}

export default PostMessageInput
