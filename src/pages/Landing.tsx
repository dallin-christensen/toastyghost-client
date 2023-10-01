import { Box, Typography } from "@mui/material"
import CreateNewRoomForm from "../components/CreateNewRoomForm"
import Logo from "../components/Logo"
import styled from '@emotion/styled'

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
`

function Landing() {
  return (
    <Container>
      <div>
        <Logo size="large" />
        <Typography variant="h2">Ghost Toast</Typography>
      </div>
      <CreateNewRoomForm />
    </Container>
  )
}

export default Landing