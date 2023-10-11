import { ReactNode, createContext, useContext, useState } from 'react'
import RoomType from '../data/types/RoomType'
import ParticipantType from '../data/types/ParticipantType'
// import MessageType from "../data/types/MessageType"

type RoomContextType = {
  joinRoom: (room: RoomType) => void
  insertParticipant: (participant: ParticipantType) => void
  insertMessage: () => void
  leaveRoom: () => void

  // getParticipants: () => ParticipantType[]
  // getParticipant: () => ParticipantType
  // getLatestMessage: () => MessageType
  setRoom: (room: RoomType) => void
  room: RoomType | null
}

const RoomContext = createContext({} as RoomContextType)

export function useRoom() {
  return useContext(RoomContext)
}

type RoomProviderProps = {
  children: ReactNode
}

export function RoomProvider({ children }: RoomProviderProps) {
  const [room, setRoom] = useState<RoomType | null>(null)

  const joinRoom = (room: RoomType) => {
    setRoom(room)
  }
  const leaveRoom = () => {}
  const insertParticipant = () => {}
  const insertMessage = () => {}

  return (
    <RoomContext.Provider
      value={{
        joinRoom,
        leaveRoom,
        insertParticipant,
        insertMessage,
        setRoom,
        room,
      }}
    >
      {children}
    </RoomContext.Provider>
  )
}
