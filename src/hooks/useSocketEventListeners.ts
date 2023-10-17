import { useNavigate } from 'react-router-dom'
import { useRoom } from '../context/RoomContext'
import socket from '../socket'
import { useSnackbar } from '../context/SnackbarContext'
import RoomType from '../data/types/RoomType'

function findParticipantById(room: RoomType, participantId: string) {
  return room.participants.find((participant) => participant._id === participantId)
}

function useSocketEventListeners() {
  const navigate = useNavigate()
  const { room: currentRoom, setRoom } = useRoom()
  const { triggerSnackbar } = useSnackbar()

  socket.on('messageinserted', (room) => {
    setRoom(room)
  })

  socket.on('coordinatesupdated', (room) => {
    setRoom(room)
  })

  socket.on('joinedroom', (room, participantId) => {
    const participant = findParticipantById(room, participantId)

    if (participant) {
      triggerSnackbar(`${participant.handle} has joined the room`)
      setRoom(room)
    }
  })

  socket.on('leftroom', (room, participantId) => {
    if (currentRoom) {
      const participant = findParticipantById(currentRoom, participantId)
      if (participant) {
        triggerSnackbar(`${participant.handle} has left the room`)
        setRoom(room)
      }
    }
  })

  socket.on('roomdeleted', () => {
    triggerSnackbar(`host has closed the room`)
    navigate('/')
  })
}

export default useSocketEventListeners
