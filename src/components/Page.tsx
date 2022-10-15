import { Helmet } from 'react-helmet-async'
import { forwardRef } from 'react'
import { ReactNode } from 'react'

const Page = forwardRef(({ children, title = '', meta, ...other }: props, ref: any) => (
  <>
    <Helmet>
      <title>{`${title}`}</title>
      {meta}
    </Helmet>

    <div ref={ref} {...other}>
      {children}
    </div>
  </>
))

export default Page

interface props {
  children: ReactNode
  title?: string
  meta?: ReactNode
  other?: any
}
