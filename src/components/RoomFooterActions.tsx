import IconButton from '../elements/IconButton'
import useSocketEventEmissions from '../hooks/useSocketEventEmissions'
import { useSnackbar } from '../context/SnackbarContext'
import { useCurrentUser } from '../context/UserContext'
import { useRoom } from '../context/RoomContext'
import { RiLink, RiCloseFill } from 'react-icons/ri'
import Tooltip from '../elements/Tooltip'

function RoomFooterActions() {
  const { emitDisconnect } = useSocketEventEmissions()
  const { triggerSnackbar } = useSnackbar()

  const { currentUser } = useCurrentUser()
  const { room } = useRoom()

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    triggerSnackbar('copied URL to clipboard')
  }

  const handleLeave = () => {
    emitDisconnect()
  }

  const isHost = room?.host === currentUser?._id

  return (
    <>
      <Tooltip
        elementToHover={
          <div>
            <IconButton onClick={copyUrlToClipboard}>
              <RiLink className="h-6 min-h-6 w-6 min-w-6" />
            </IconButton>
          </div>
        }
        tooltip="copy room link"
        positionClassName="left-1/2 transform -translate-x-1/2 bottom-[60px]"
      />
      <Tooltip
        elementToHover={
          <div>
            <IconButton onClick={() => handleLeave()}>
              <RiCloseFill className="h-6 min-h-6 w-6 min-w-6" />
            </IconButton>
          </div>
        }
        tooltip={isHost ? 'close room' : 'leave room'}
        positionClassName="left-1/2 transform -translate-x-1/2 bottom-[60px]"
      />
    </>
  )
}

export default RoomFooterActions
