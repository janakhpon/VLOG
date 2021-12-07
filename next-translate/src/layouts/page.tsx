import { ReactNode } from 'react'
import SEO, { SEOProps } from '@components/seo'

type PageProps = {
  meta?: SEOProps
  children?: ReactNode
}

const Page = ({ meta, children }: PageProps) => (
  <>
    <SEO {...meta} />
    <>
    {children}
    </>
  </>
)

export default Page
