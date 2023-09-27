import { useState } from "react"
import debounce from "../utilities/debounce"
import useTriggerFetch from "../hooks/useTriggerFetch"


function PostMessageInput() {

  const [triggerPost] = useTriggerFetch("http://localhost:8082/api/rooms/insertmessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      roomId: "650cd102c3cf0ec04622b644",
      participantId: "650cd102c3cf0ec04622b645",
      text: "rawr4"
    })
})

  const [inputVal, setInputVal] = useState('')

  const handlePostMessage = debounce(async () => {
    const x = await triggerPost()

    console.log({ x })
  })

  return (
    <div>
      <input value={inputVal} onChange={e => setInputVal(e.target.value)} />
      <button onClick={handlePostMessage}>send</button>
    </div>
  )
}

export default PostMessageInput