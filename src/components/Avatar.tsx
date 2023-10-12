import Avvvatars from 'avvvatars-react'
import ParticipantType from '../data/types/ParticipantType'
import ChatBubble from './ChatBubble'
import { Tooltip } from '@mui/material'

type AvatarProps = {
  participant: ParticipantType
}

function Avatar({ participant: p }: AvatarProps) {
  return (
    <div className="w-[1px] h-[1px] relative">
      {p.latestMessage && (
        <div className="absolute bottom-16 left-0 z-0">
          <ChatBubble message={p.latestMessage} />
        </div>
      )}
      <Tooltip title={p.handle} placement="right" arrow>
        <div className="absolute bottom-0 rounded-full border shadow border-indigo-400">
          <Avvvatars value={p.handle} size={40} border borderSize={2} />
        </div>
      </Tooltip>
    </div>
  )
}

export default Avatar
