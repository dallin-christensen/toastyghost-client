import Avvvatars from 'avvvatars-react'
import ParticipantType from '../data/types/ParticipantType'
import styled from '@emotion/styled'
import ChatBubble from './ChatBubble'

const Hitbox = styled.div`
  width: 1px;
  height: 1px;
  position: relative;
`
const AvatarContainer = styled.div`
  position: absolute;
  bottom: 0;
`
const BubbleContainer = styled.div`
  position: absolute;
  bottom: 46px;
  left: 4px;
  z-index: 0;
`

type AvatarProps = {
  participant: ParticipantType
}

function Avatar({ participant: p }: AvatarProps) {
  return (
    <Hitbox>
      <BubbleContainer>
        <ChatBubble text={p.latestMessage?.text ?? ""} />
      </BubbleContainer>
      <AvatarContainer>
        <Avvvatars value={p.handle} size={32} border borderSize={2} />
      </AvatarContainer>
    </Hitbox>
  )
}

export default Avatar