import { useRoom } from '../context/RoomContext'
import Logo from './Logo'
import { HeadingOne, HeadingTwo } from '../elements/Text'

type HeaderProps = {
  withLogo?: boolean
}

function Header({ withLogo = false }: HeaderProps) {
  const { room } = useRoom()
  return (
    <div className="flex gap-x-5 items-center py-3 px-5 bg-backgroundsecondary dark:bg-backgroundsecondarydark border-b-2 shadow-brutal dark:shadow-brutaldark border-black dark:border-white rounded-lg m-2 border-2 w-fit">
      {withLogo && <Logo size="small" />}
      <div className="flex gap-x-4 flex-wrap items-baseline ">
        <HeadingOne>toastyGhost</HeadingOne>
        {room?.name && <HeadingTwo>{room?.name?.toUpperCase()}</HeadingTwo>}
      </div>
    </div>
  )
}

export default Header
