import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'

const Bubble = styled.div`
	max-width: 300px;
	background-color: #09f;

  padding: .7em 1em;
  line-height: 1.5em;
  color: white;

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
    left: 0px;
    right: auto;
    top: auto;
    bottom: -12px;
    border: 16px solid;
    border-color: transparent transparent transparent #09f;
  }

  /* animation stuffs */
  -webkit-animation-duration: .5s;
  animation-duration: .5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

`

type ChatBubbleProps = {
  text: string
}

function ChatBubble({ text }: ChatBubbleProps) {
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
  }, [text])

  return (
    <Bubble className={displayText ? 'toastup' : 'toastdown'}>
      <Typography variant="body1">{text}</Typography>
    </Bubble>
  )
}

export default ChatBubble