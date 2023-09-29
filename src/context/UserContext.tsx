import { ReactNode, createContext, useContext } from "react"
import ParticipantType from "../data/types/ParticipantType"
import { useLocalStorage } from 'usehooks-ts'

type ParticipantContextType = {
  setCurrentUser: (participant: ParticipantType) => void
  currentUser: ParticipantType | null
}

const ParticpantContext = createContext({} as ParticipantContextType)

export function useCurrentUser() {
  return useContext(ParticpantContext)
}

type ParticipantProviderProps = {
  children: ReactNode
}

export function CurrentUserProvider({ children }: ParticipantProviderProps) {
  const [currentUser, setCurrentUser] = useLocalStorage<ParticipantType | null>("currentUser", null)

  return (
    <ParticpantContext.Provider
      value={{
        currentUser,
        setCurrentUser
      }}
    >
      {children}
    </ParticpantContext.Provider>
  )
}