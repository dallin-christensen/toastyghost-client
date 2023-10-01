import IconButton from "../elements/IconButton"
import LinkIcon from '@mui/icons-material/Link';
import CloseIcon from '@mui/icons-material/Close';
import { Tooltip } from "@mui/material";
import useSocketEventEmissions from "../hooks/useSocketEventEmissions";
import { useSnackbar } from "../context/SnackbarContext";

function RoomFooterActions() {
  const {
    emitDisconnect
  } = useSocketEventEmissions()
  const { triggerSnackbar } = useSnackbar()

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
    triggerSnackbar("copied URL to clipboard")
  }

  const handleLeave = () => {
    emitDisconnect()
  }

  return (
    <>
    <Tooltip title="copy room link" placement="top" arrow>
      <div>
        <IconButton variant="outlined"
          sx={{ transform: 'rotate(-45deg)' }}
          onClick={copyUrlToClipboard}
        >
          <LinkIcon />
        </IconButton>
      </div>
    </Tooltip>
    <Tooltip title="close room" placement="top" arrow>
      <div>
        <IconButton variant="outlined"
          onClick={() => handleLeave()}
        >
          <CloseIcon />
        </IconButton>
      </div>
    </Tooltip>

    </>
  )
}

export default RoomFooterActions