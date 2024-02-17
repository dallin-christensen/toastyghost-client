import Avvvatars from 'avvvatars-react'
import ParticipantType from '../data/types/ParticipantType'
import ChatBubble from './ChatBubble'
import { Text } from '../elements/Text'

type AvatarProps = {
  participant: ParticipantType
}

function Avatar({ participant: p }: AvatarProps) {
  return (
    <div className="w-[1px] h-[1px] relative">
      {p.latestMessage && (
        <div className="absolute bottom-[68px] left-0 z-0">
          <ChatBubble message={p.latestMessage} />
        </div>
      )}
      <div className="absolute bottom-0 rounded-full border-2 border-black dark:border-white bg-cover bg-center shadow-brutal dark:shadow-brutaldark transition-all duration-300 hover:scale-110 dark:bg-white">
        <div className="border-black border rounded-full">
          <Avvvatars style="shape" value={p.handle} size={40} />
        </div>
      </div>
      <div className='pt-2'>
        <Text>{p.handle}</Text>
      </div>
    </div>
  )
}

export default Avatar
