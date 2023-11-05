import { memo } from 'react'
import GhostSVG from '../assets/ghost.svg?react' // eslint-disable-line import/no-unresolved

function LoadingScreen() {
  return (
    <div className=" absolute flex w-full h-screen items-center justify-center bg-white z-50">
      <div className="w-20 h-20 rounded-full flex justify-center items-center shadow-brutal border-2 border-black opacity-100">
        <div className="flex justify-center items-center w-full h-full rounded-full bg-gradient-to-br bg-primary animate-spin [&>svg]:h-12 [&>svg]:w-12 [&>svg]:pb-1 [&>svg]:pr-0">
          <GhostSVG />
        </div>
      </div>
    </div>
  )
}

export default memo(LoadingScreen)
