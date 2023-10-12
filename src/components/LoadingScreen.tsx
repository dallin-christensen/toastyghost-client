import { CircularProgress } from '@mui/material'

function LoadingScreen() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <CircularProgress disableShrink />
    </div>
  )
}

export default LoadingScreen
