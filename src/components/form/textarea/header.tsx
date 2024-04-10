import { Bold, Italic, Link, List, ListOrdered } from 'lucide-react'
import { Select, SelectItem } from '../select'
import { ComponentProps } from 'react'
import { Button } from '@/components/button'

export interface TextAreaProps extends ComponentProps<'div'> {}

export function TextAreaHeader(props: TextAreaProps) {
  return (
    <div className="grid grid-cols-2 gap-3" {...props}>
      <Select placeholder="" defaultValue="normal">
        <SelectItem text="Normal Text" value="normal" defaultChecked />
        <SelectItem text="Markdown" value="md" />
      </Select>

      <div className="flex items-center gap-1">
        <Button variant="ghost" type="button">
          <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
        </Button>
        <Button variant="ghost" type="button">
          <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
        </Button>
        <Button variant="ghost" type="button">
          <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
        </Button>
        <Button variant="ghost" type="button">
          <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
        </Button>
        <Button variant="ghost" type="button">
          <ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3} />
        </Button>
      </div>
    </div>
  )
}
