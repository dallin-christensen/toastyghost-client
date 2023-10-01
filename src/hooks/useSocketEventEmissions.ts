import { useNavigate } from "react-router-dom"
import socket from "../socket"
import { useSnackbar } from "../context/SnackbarContext"

type InsertMessageArgs = {
  roomId: string
  participantId: string
  text: string
}

function useSocketEventEmissions() {
  const navigate = useNavigate()

  const {
    triggerSnackbar
  } = useSnackbar()

  const emitInsertMessage = ({ roomId, participantId, text }: InsertMessageArgs) => {
    socket.emit('insertmessage', {
      roomId,
      participantId,
      text,
    })
  }

  const emitDisconnect = () => {
    triggerSnackbar('Successfully left room')
    socket.emit('leaveroom')
    navigate("/")
  }

  return {
    emitInsertMessage,
    emitDisconnect,
  }
}

export default useSocketEventEmissions