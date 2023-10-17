import { useNavigate } from 'react-router-dom'
import socket from '../socket'
import { useSnackbar } from '../context/SnackbarContext'

type InsertMessageArgs = {
  roomId: string
  participantId: string
  text: string
}

type UpdateCoordinatesArgs = {
  roomId: string
  participantId: string
  x: number
  y: number
}

function useSocketEventEmissions() {
  const navigate = useNavigate()

  const { triggerSnackbar } = useSnackbar()

  const emitInsertMessage = ({ roomId, participantId, text }: InsertMessageArgs) => {
    socket.emit('insertmessage', {
      roomId,
      participantId,
      text,
    })
  }

  const emitUpdateCoordinates = ({ roomId, participantId, x, y }: UpdateCoordinatesArgs) => {
    socket.emit('updatecoordinates', {
      roomId,
      participantId,
      x,
      y,
    })
  }

  const emitDisconnect = () => {
    triggerSnackbar('Successfully left room')
    socket.emit('leaveroom')
    navigate('/')
  }

  return {
    emitInsertMessage,
    emitDisconnect,
    emitUpdateCoordinates,
  }
}

export default useSocketEventEmissions
