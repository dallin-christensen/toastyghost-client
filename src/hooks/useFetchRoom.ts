import { useParams } from "react-router-dom"
import { useRoom } from "../context/RoomContext"
import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"

function useFetchRoom() {
  const { roomId = "" } = useParams()

  const { data, isLoading, error } = useQuery({ queryKey: ['room'], queryFn: async () => {
    return await fetch(`http://localhost:8082/api/rooms/${roomId}`)
      .then(res => res.json())
  }})

  const {
    setRoom,
  } = useRoom()

  useEffect(() => {
    if (data?._id) {
      setRoom(data)
    }
  }, [data?._id])

  return {
    data,
    isLoading,
    error
  }
}

export default useFetchRoom