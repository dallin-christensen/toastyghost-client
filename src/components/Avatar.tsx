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
      <AvatarContainer>
        <Avvvatars value={p.handle} size={40} border borderSize={2} />
      </AvatarContainer>
    </Hitbox>
  )
}

export default Avatar