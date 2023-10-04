import Avvvatars from 'avvvatars-react'
import ParticipantType from '../data/types/ParticipantType'
import styled from '@emotion/styled'
import ChatBubble from './ChatBubble'
import { useCurrentUser } from '../context/UserContext'
import { Tooltip } from '@mui/material'

const Hitbox = styled.div`
  width: 1px;
  height: 1px;
  position: relative;
`
const AvatarContainer = styled.div`
  position: absolute;
  bottom: 0;
  border-radius: 100%;
`
const BubbleContainer = styled.div`
  position: absolute;
  bottom: 58px;
  left: 0px;
  z-index: 0;
`

type AvatarProps = {
  participant: ParticipantType
}

function Avatar({ participant: p }: AvatarProps) {
  const { currentUser } = useCurrentUser()

  const isUser = p._id === currentUser?._id

  return (
    <Hitbox>
      {
        p.latestMessage
          && (
            <BubbleContainer>
              <ChatBubble message={p.latestMessage} />
            </BubbleContainer>
          )
      }
      <Tooltip title={p.handle} placement="right" arrow>
        <AvatarContainer className={isUser ? "pulse-animation" : undefined}>
          <Avvvatars value={p.handle} size={40} border borderSize={2} />
        </AvatarContainer>
      </Tooltip>
    </Hitbox>
  )
}

export default Avatar