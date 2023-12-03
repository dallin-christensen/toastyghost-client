import React, { useRef, useState } from 'react'
import debounce from '../utilities/debounce'
import { useRoom } from '../context/RoomContext'
import { useCurrentUser } from '../context/UserContext'
import TextInput from '../elements/TextInput'
import IconButton from '../elements/IconButton'
import useSocketEventEmissions from '../hooks/useSocketEventEmissions'
import { useEventListener } from 'usehooks-ts'
import { RiSendPlane2Line } from 'react-icons/ri'
import Tooltip from '../elements/Tooltip'

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
        placeholder={'message - Press "/" to auto-focus'}
        value={messageVal}
        onChange={(e) => handleSetMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        error={messageValError}
        inputRef={inputRef}
        className="min-w-full md:min-w-0"
      />
      <Tooltip
        elementToHover={
          <IconButton onClick={handlePostMessage} disabled={!messageVal}>
            <RiSendPlane2Line className="h-6 min-h-6 w-6 min-w-6" />
          </IconButton>
        }
        tooltip="send message"
        positionClassName="left-1/2 transform -translate-x-1/2 bottom-[60px]"
      />
    </>
  )
}

export default PostMessageInput
