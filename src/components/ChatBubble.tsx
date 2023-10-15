import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import MessageType from '../data/types/MessageType'

const afterClasses =
  "after:content-[' '] after:absolute after:w-0 after:h-0 after:left-5 after:right-auto after:top-auto after:-bottom-3 after:border-[16px] after:border-solid after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-messageblue after:-z-10"

type ChatBubbleProps = {
  message: MessageType
}

function ChatBubble({ message }: ChatBubbleProps) {
  const { text, _id } = message

  const [displayText, setDisplayText] = useState(true)

  useEffect(() => {
    const displayMessageMs = text.length * 100 < 5000 ? 5000 : text.length * 100

    setDisplayText(true)
    const timeout = setTimeout(() => {
      setDisplayText(false)
    }, displayMessageMs)

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [_id, text])

  return (
    <div
      className={`${
        displayText ? 'toastup' : 'toastdown'
      } max-w-80 bg-messageblue px-4 py-3 leading-normal font-black text-white mx-0 my-auto -left-80 -right-80 w-max rounded-2xl ${afterClasses}`}
    >
      <Typography variant="body1">{text}</Typography>
    </div>
  )
}

export default ChatBubble
