import useSocketConnect from '../hooks/useSocketConnect'
import useSocketEventListeners from '../hooks/useSocketEventListeners'
import PostMessageInput from './PostMessageInput'
import RoomFooterActions from './RoomFooterActions'
import Canvas from './Canvas'
import Header from './Header'

function SubscribedRoom() {
  useSocketConnect()
  useSocketEventListeners()

  return (
    <div className="overflow-hidden h-screen">
      <Header withLogo />
      <Canvas />
      <div className="dont-register-avatar-movement absolute rounded-t-md bg-transparent bottom-0 w-full max-w-2xl flex flex-wrap items-center justify-center gap-3 p-3 left-1/2 transform -translate-x-1/2">
        <PostMessageInput />
        <RoomFooterActions />
      </div>
    </div>
  )
}

export default SubscribedRoom
