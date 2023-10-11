import { Box, CircularProgress } from '@mui/material'
import styled from '@emotion/styled'

const LoadingContainer = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

function LoadingScreen() {
  return (
    <LoadingContainer>
      <CircularProgress disableShrink />
    </LoadingContainer>
  )
}

export default LoadingScreen
