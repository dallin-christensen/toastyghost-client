import { memo } from 'react'
import { CgSpinnerTwoAlt } from 'react-icons/cg'

function LoadingScreen() {
  return (
    <div className=" absolute flex w-full h-screen items-center justify-center bg-white z-50">
      <div className="w-20 h-20 rounded-full flex justify-center items-center shadow-brutal border-2 border-black opacity-100">
        <div className="flex justify-center items-center w-full h-full rounded-full bg-gradient-to-tl from-primary from-50% to-backgroundsecondary to-50% animate-spin">
          <CgSpinnerTwoAlt className="text-5xl text-black" />
        </div>
      </div>
    </div>
  )
}

export default memo(LoadingScreen)
