import Logo from '../components/Logo'
import { ReactNode } from 'react'
import { HeadingOne, Text } from '../elements/Text'

type TemplateProps = {
  children: ReactNode
}

function ExteriorPageTemplate({ children }: TemplateProps) {
  return (
    <div className="flex items-center justify-evenly h-full flex-row flex-wrap gap-8 p-8">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Logo size="large" />
        <HeadingOne className="mt-4 mb-2">toastyGhost</HeadingOne>
        <Text>OPEN-SOURCE, ANONYMOUS, INTERACTIVE CHAT</Text>
      </div>
      {children}
    </div>
  )
}

export default ExteriorPageTemplate
