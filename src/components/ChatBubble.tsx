import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import MessageType from '../data/types/MessageType'
import { useCurrentUser } from '../context/UserContext'

type BubbleProps = {
  colorBubble: boolean
}

const Bubble = styled.div<BubbleProps>`
	max-width: 300px;
	/* background-color: #09f; */
  background-color: ${(props) => props.colorBubble ? '#09f' : '#eee'};

  padding: .7em 1em;
  line-height: 1.5em;
  font-weight: 900;
  /* color: white; */
  color: ${(props) => props.colorBubble ? '#fff' : '#000'};

  margin:0 auto;
  left:-300px;
  right:-300px;
  width:max-content;

  border-radius: 16px;
	-webkit-border-radius: 16px;
	-moz-border-radius: 16px;


  :after {
    content: ' ';
    position: absolute;
    width: 0;
    height: 0;
    left: 20px;
    right: auto;
    top: auto;
    bottom: -12px;
    border: 16px solid;
    /* border-color: transparent transparent transparent #09f; */
    border-color: transparent transparent transparent ${(props) => props.colorBubble ? '#09f' : '#eee'};
    z-index: -1;
  }

  /* animation stuffs */
  -webkit-animation-duration: .2s;
  animation-duration: .2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
`

type ChatBubbleProps = {
  message: MessageType
}

function ChatBubble({ message }: ChatBubbleProps) {
  const { text, _id, participantId } = message

  const { currentUser } = useCurrentUser()
  const [displayText, setDisplayText] = useState(false)

  useEffect(() => {
    const displayMessageMs = text.length * 100 < 5000 ? 5000 : text.length * 100

    if (text) {
      setDisplayText(true)
      var timeout = setTimeout(() => {
        setDisplayText(false)
      }, displayMessageMs)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [_id, text])

  const isCurrentUser = participantId === currentUser?._id

  return (
    <Bubble className={displayText ? 'toastup' : 'toastdown'} colorBubble={isCurrentUser}>
      <Typography variant="body1">{text}</Typography>
    </Bubble>
  )
}

export default ChatBubble