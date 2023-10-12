import { Typography } from '@mui/material'
import { useRoom } from '../context/RoomContext'
import Logo from './Logo'

type HeaderProps = {
  withLogo?: boolean
}

function Header({ withLogo = false }: HeaderProps) {
  const { room } = useRoom()
  return (
    <div className="flex gap-x-4 items-baseline p-2">
      {withLogo && <Logo size="small" />}
      <Typography variant="h2" sx={{ userSelect: 'none' }}>
        toastyGhost
      </Typography>
      {room?.name && (
        <Typography variant="h4" sx={{ color: 'primary.main', userSelect: 'none' }}>
          {room?.name?.toUpperCase()}
        </Typography>
      )}
    </div>
  )
}

export default Header
