import { ComponentProps } from 'react'

interface TextAreaRootProps extends ComponentProps<'div'> {}

export function TextAreaRoot(props: TextAreaRootProps) {
  return <div className="space-y-3" {...props} />
}
