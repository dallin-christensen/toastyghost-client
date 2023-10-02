import { useRoom } from "../context/RoomContext"
import { useEventListener } from 'usehooks-ts'
import Avvvatars from 'avvvatars-react'
import styled from '@emotion/styled'
import useSocketEventEmissions from "../hooks/useSocketEventEmissions"
import { useCurrentUser } from "../context/UserContext"

type AvatarContainerProps = {
  left: number
  top: number
}

const AvatarContainer = styled.div<AvatarContainerProps>`
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
`

function Canvas() {
  const { room } = useRoom()
  const { currentUser } = useCurrentUser()
  const { emitUpdateCoordinates } = useSocketEventEmissions()

  const onClick = (e: MouseEvent) => {
    if (room?._id && currentUser?._id) {
      emitUpdateCoordinates({ roomId: room._id, participantId: currentUser._id, x: e.clientX, y: e.clientY })
    }
  }

  useEventListener('click', onClick)

  if (!room) return null

  const { participants } = room

  return (
    <div>
      {
        participants.map((p) => (
          <AvatarContainer left={p.x} top={p.y} key={p._id}>
          {
            p?.latestMessage
              && p.latestMessage.text
          }
            <Avvvatars value={p.handle} size={32} border borderSize={2} borderColor="#673ab7" />
            {p.handle}
          </AvatarContainer>
        ))
      }
      {/* <pre style={{ flex: 1 }}>{JSON.stringify(room, undefined, 2)}</pre> */}
    </div>
  )
}

export default Canvas