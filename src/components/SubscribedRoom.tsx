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
    <>
      <Header withLogo />
      <div className="flex flex-col overflow-hidden p-5">
        <div className="overflow-hidden">
          <Canvas />
        </div>
        <div className="action-paper absolute rounded-t-md bg-background bottom-0 w-full max-w-2xl flex flex-wrap items-center justify-center gap-3 p-3 left-1/2 transform -translate-x-1/2 shadow-xl border border-stone-300">
          <PostMessageInput />
          <RoomFooterActions />
        </div>
      </div>
    </>
  )
}

export default SubscribedRoom
