import ParticipantType from "../data/types/ParticipantType"
import RoomType from "../data/types/RoomType"

function currentUserInRoom(participant: ParticipantType | undefined, room: RoomType | undefined) {
  if(!participant || !room) return false

  if (room?.participants?.length && participant?._id) {
    return room.participants.some((roomParticipant: ParticipantType) => roomParticipant._id === participant._id)
  }

  return false
}

export default currentUserInRoom