import { Box, Typography } from "@mui/material"
import { useRoom } from "../context/RoomContext"
import styled from '@emotion/styled'

const Wrapper = styled(Box)`
  display: flex;
  column-gap: 1em;
  align-items: baseline;
  padding: .5em;
`

function Header() {
  const { room } = useRoom()
  return (
    <Wrapper>
      <Typography variant="h2">Ghost Toast</Typography>
      {
        room?.name
          && (
            <Typography variant="h4" sx={{ color: 'primary.main' }}>{room?.name?.toUpperCase()}</Typography>
          )
      }
    </Wrapper>
  )
}

export default Header