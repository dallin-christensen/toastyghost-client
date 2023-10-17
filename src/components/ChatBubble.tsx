import { useEffect, useState } from 'react'
import MessageType from '../data/types/MessageType'
import { Text } from '../elements/Text'

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
    <div className={`${displayText ? 'toastup' : 'toastdown'}`}>
      <div
        className={`max-w-80 bg-messageblue px-4 py-3 leading-normal font-black text-black mx-0 my-auto -left-80 -right-80 w-max rounded-lg shadow-brutal border-2 border-black`}
      >
        <Text>{text}</Text>
      </div>
      <div
        className={`absolute w-0 h-0 left-6 right-auto top-auto -bottom-2 border-[8px] border-solid border-t-messageblue border-r-transparent border-b-transparent border-l-messageblue -z-0`}
      ></div>
      <div
        className={`absolute w-0 h-0 left-[22px] right-auto top-auto -bottom-[13px] border-[10px] border-solid border-t-black border-r-transparent border-b-transparent border-l-black -z-10`}
      />
    </div>
  )
}

export default ChatBubble
