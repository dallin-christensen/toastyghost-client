import { useEffect } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import { TbAlertOctagonFilled } from 'react-icons/tb'

const typeClasses = {
  success: 'bg-success',
  error: 'bg-dangerbg',
}

const iconClasses = 'mr-3 h-6 min-h-[24px] w-6 min-w-[24px]'

type SnackbarProps = {
  message: string
  open: boolean
  onClose: () => void
  type?: 'success' | 'error'
}

export default function Snackbar({ message, open, onClose, type = 'success' }: SnackbarProps) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose()
    }, 4000)

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [open, onClose])

  return (
    <div
      role="alert"
      className={`absolute left-1/2 transform -translate-x-1/2 top-2 flex items-center justify-center rounded-md border-2 border-black dark:border-white p-5 px-8 font-bold shadow-brutal dark:shadow-brutaldark z-20 ${
        typeClasses[type]
      } transition-all ease-out ${open ? 'scale-100 translate-y-0' : 'scale-0 -translate-y-8'}`}
    >
      {type === 'success' ? (
        <BsCheckCircleFill className={`${iconClasses}`} />
      ) : (
        <TbAlertOctagonFilled className={`${iconClasses}`} />
      )}
      {message}
    </div>
  )
}
