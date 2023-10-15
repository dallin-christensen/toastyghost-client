import IconButton from '../elements/IconButton'
// import { Tooltip } from '@mui/material'
import useSocketEventEmissions from '../hooks/useSocketEventEmissions'
import { useSnackbar } from '../context/SnackbarContext'
// import { useCurrentUser } from '../context/UserContext'
// import { useRoom } from '../context/RoomContext'
import { RiLink, RiCloseFill } from 'react-icons/ri'

function RoomFooterActions() {
  const { emitDisconnect } = useSocketEventEmissions()
  const { triggerSnackbar } = useSnackbar()

  // const { currentUser } = useCurrentUser()
  // const { room } = useRoom()

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    triggerSnackbar('copied URL to clipboard')
  }

  const handleLeave = () => {
    emitDisconnect()
  }

  // const isHost = room?.host === currentUser?._id

  return (
    <>
      {/* <Tooltip title="copy room link" placement="top" arrow> */}
      <div>
        <IconButton onClick={copyUrlToClipboard}>
          <RiLink className="h-6 min-h-6 w-6 min-w-6" />
        </IconButton>
      </div>
      {/* <Tooltip title={isHost ? 'close room' : 'leave room'} placement="top" arrow> */}
      <div>
        <IconButton onClick={() => handleLeave()}>
          <RiCloseFill className="h-6 min-h-6 w-6 min-w-6" />
        </IconButton>
      </div>
    </>
  )
}

export default RoomFooterActions
