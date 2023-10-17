import Avvvatars from 'avvvatars-react'
import ParticipantType from '../data/types/ParticipantType'
import ChatBubble from './ChatBubble'
import Tooltip from '../elements/Tooltip'

type AvatarProps = {
  participant: ParticipantType
}

function Avatar({ participant: p }: AvatarProps) {
  return (
    <div className="w-[1px] h-[1px] relative">
      {p.latestMessage && (
        <div className="absolute bottom-12 left-0 z-0">
          <ChatBubble message={p.latestMessage} />
        </div>
      )}
      <Tooltip
        elementToHover={
          <div className="absolute bottom-0 rounded-full border-2 border-black bg-cover bg-center shadow-brutal transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-none hover:border-3">
            <Avvvatars style="shape" value={p.handle} size={40} />
          </div>
        }
        tooltip={p.handle}
        positionClassName="bottom-[6px] left-14"
      />
    </div>
  )
}

export default Avatar
