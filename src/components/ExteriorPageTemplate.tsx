import { Box, Typography } from '@mui/material'
import Logo from '../components/Logo'
import styled from '@emotion/styled'
import { ReactNode } from 'react'

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

type TemplateProps = {
  children: ReactNode
}

function ExteriorPageTemplate({ children }: TemplateProps) {
  return (
    <Container>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Logo size="large" />
        <Typography variant="h2">toastyGhost</Typography>
        <Typography variant="button">open-souce, anonymous, interactive chat</Typography>
      </div>
      {children}
    </Container>
  )
}

export default ExteriorPageTemplate
