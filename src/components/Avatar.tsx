import Avvvatars from 'avvvatars-react'
import ParticipantType from '../data/types/ParticipantType'
import styled from '@emotion/styled'
import ChatBubble from './ChatBubble'
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
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  border: 1px solid #bbd;
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
        <AvatarContainer>
          <Avvvatars value={p.handle} size={40} border borderSize={2} />
        </AvatarContainer>
      </Tooltip>
    </Hitbox>
  )
}

export default Avatar