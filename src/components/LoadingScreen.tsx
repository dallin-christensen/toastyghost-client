import { memo } from 'react'
import { ImSpinner5 } from 'react-icons/im'

function LoadingScreen() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="w-20 h-20 bg-primary rounded-full flex justify-center items-center shadow-brutal border-2 border-black">
        <ImSpinner5 className="text-6xl text-black animate-spin" />
      </div>
    </div>
  )
}

export default memo(LoadingScreen)
