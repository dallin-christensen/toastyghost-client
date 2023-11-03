import Logo from '../components/Logo'
import { ReactNode } from 'react'
import { HeadingOne, Text } from '../elements/Text'

type TemplateProps = {
  children: ReactNode
}

function ExteriorPageTemplate({ children }: TemplateProps) {
  return (
    <div className="flex min-h-screen items-center justify-evenly h-full flex-row flex-wrap gap-x-8 gap-y-4 p-8 text-center">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Logo size="large" />
        <HeadingOne className="mt-4 mb-2">toastyGhost</HeadingOne>
        <Text>Open-source, anonymous, interactive chat</Text>
      </div>
      {children}
    </div>
  )
}

export default ExteriorPageTemplate
