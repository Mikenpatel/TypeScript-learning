import { ReactElement, ReactNode } from 'react'

type SectionProps = {
    title?: string,
    children: ReactNode
}

function Section({children, title = 'My Section Heading'}: SectionProps): ReactElement {
  return (
    <section>
        <h1>{title}</h1>
        <p>{children}</p>
    </section>
  )
}

export default Section