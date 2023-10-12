import { Typography } from '@mui/material'
import Logo from '../components/Logo'
import { ReactNode } from 'react'

type TemplateProps = {
  children: ReactNode
}

function ExteriorPageTemplate({ children }: TemplateProps) {
  return (
    <div className="flex items-center justify-evenly h-full flex-row flex-wrap gap-8 p-8">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Logo size="large" />
        <Typography variant="h2">toastyGhost</Typography>
        <Typography variant="button">open-souce, anonymous, interactive chat</Typography>
      </div>
      {children}
    </div>
  )
}

export default ExteriorPageTemplate
