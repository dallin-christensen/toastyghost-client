import { Box, Typography } from "@mui/material"
import { useRoom } from "../context/RoomContext"
import styled from '@emotion/styled'
import Logo from "./Logo"

const Wrapper = styled(Box)`
  display: flex;
  column-gap: 1em;
  align-items: baseline;
  padding: .5em;
`

type HeaderProps = {
  withLogo?: boolean
}

function Header({ withLogo = false }: HeaderProps) {
  const { room } = useRoom()
  return (
    <Wrapper>
      {
        withLogo
          && <Logo size='small' />
      }
      <Typography variant="h2" sx={{ userSelect: "none" }}>toastyGhost</Typography>
      {
        room?.name
          && (
            <Typography variant="h4" sx={{ color: 'primary.main', userSelect: "none" }}>{room?.name?.toUpperCase()}</Typography>
          )
      }
    </Wrapper>
  )
}

export default Header