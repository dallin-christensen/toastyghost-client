import { useState } from "react"
import debounce from "../utilities/debounce"
import socket from "../socket"


function PostMessageInput() {
  const [inputVal, setInputVal] = useState('')

  const handlePostMessage = debounce(async () => {
    socket.emit('insertmessage', {
      roomId: "650cd102c3cf0ec04622b644",
      participantId: "650cd102c3cf0ec04622b645",
      text: inputVal,
    })
  })

  return (
    <div>
      <input value={inputVal} onChange={e => setInputVal(e.target.value)} />
      <button onClick={handlePostMessage}>send</button>
    </div>
  )
}

export default PostMessageInput