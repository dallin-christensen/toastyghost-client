import { ImSpinner5 } from 'react-icons/im'

function LoadingScreen() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <ImSpinner5 className="text-6xl text-black animate-spin" />
    </div>
  )
}

export default LoadingScreen
