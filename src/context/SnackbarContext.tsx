import { Alert, Snackbar } from '@mui/material'
import { ReactNode, createContext, useContext, useState } from 'react'

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

  return (
    <SnackbarContext.Provider
      value={{
        triggerSnackbar,
      }}
    >
      <Snackbar
        open={open}
        autoHideDuration={2500}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setOpen(false)}
      >
        <Alert severity={snackType}>{snackMessage}</Alert>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  )
}
