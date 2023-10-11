import MessageType from './MessageType'

type ParticipantType = {
  _id: string
  avatar: string
  handle: string
  latestMessage?: MessageType
  x: number
  y: number
}

export default ParticipantType
