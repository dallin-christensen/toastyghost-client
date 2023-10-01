import { useNavigate } from "react-router-dom"
import socket from "../socket"

type InsertMessageArgs = {
  roomId: string
  participantId: string
  text: string
}

function useSocketEventEmissions() {
  const navigate = useNavigate()

  const emitInsertMessage = ({ roomId, participantId, text }: InsertMessageArgs) => {
    socket.emit('insertmessage', {
      roomId,
      participantId,
      text,
    })
  }

  const emitDisconnect = () => {
    // TODO deploy toast
    socket.emit('leaveroom')
    navigate("/")
  }

  return {
    emitInsertMessage,
    emitDisconnect,
  }
}

export default useSocketEventEmissions