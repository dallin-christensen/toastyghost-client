import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useRoom } from "../context/RoomContext"
import { useEffect } from "react"
import socket from "../socket"

function useSetRoom() {
  const { roomId = "" } = useParams()
  const { data } = useFetch(`http://localhost:8082/api/rooms/${roomId}`)

  const {
    setRoom,
  } = useRoom()

  useEffect(() => {
    if (data?._id) {
      setRoom(data)
    }
  }, [data?._id])

  socket.on('messageinserted', (room) => {
    setRoom(room)
  });
}

export default useSetRoom