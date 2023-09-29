import { useState } from "react"
import debounce from "../utilities/debounce"
import socket from "../socket"
import { useRoom } from "../context/RoomContext"
import { useCurrentUser } from "../context/UserContext"


function PostMessageInput() {
  const [inputVal, setInputVal] = useState('')
  const { room } = useRoom()
  const { currentUser } = useCurrentUser()

  const handlePostMessage = debounce(async () => {
    socket.emit('insertmessage', {
      roomId: room?._id,
      participantId: currentUser?._id,
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