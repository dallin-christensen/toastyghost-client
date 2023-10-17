import { ReactNode, createContext, useCallback, useContext, useState } from 'react'
import Snackbar from '../elements/Snackbar'

type SnackTypeType = 'success' | 'error'

type SnackbarContextType = {
  triggerSnackbar: (msg: string, type?: SnackTypeType) => void
}

const SnackbarContext = createContext({} as SnackbarContextType)

export function useSnackbar() {
  return useContext(SnackbarContext)
}

type SnackbarProviderProps = {
  children: ReactNode
}

export function SnackbarProvider({ children }: SnackbarProviderProps) {
  const [open, setOpen] = useState(false)
  const [snackMessage, setSnackMessage] = useState('')
  const [snackType, setSnackType] = useState<SnackTypeType>('success')

  const triggerSnackbar = (msg: string, type: SnackTypeType = 'success') => {
    setOpen(true)
    setSnackMessage(msg)
    setSnackType(type)
  }

  const onClose = useCallback(() => setOpen(false), [])

  return (
    <SnackbarContext.Provider
      value={{
        triggerSnackbar,
      }}
    >
      <Snackbar message={snackMessage} open={open} type={snackType} onClose={onClose} />
      {children}
    </SnackbarContext.Provider>
  )
}
