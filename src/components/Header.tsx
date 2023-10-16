import { useRoom } from '../context/RoomContext'
import Logo from './Logo'
import { HeadingOne, HeadingTwo } from '../elements/Text'

type HeaderProps = {
  withLogo?: boolean
}

function Header({ withLogo = false }: HeaderProps) {
  const { room } = useRoom()
  return (
    <div className="flex gap-x-4 items-baseline p-2">
      {withLogo && <Logo size="small" />}
      <HeadingOne>toastyGhost</HeadingOne>
      {room?.name && <HeadingTwo>{room?.name?.toUpperCase()}</HeadingTwo>}
    </div>
  )
}

export default Header
