import { Bold, Italic, Link, List, ListOrdered } from 'lucide-react'
import { Select, SelectItem } from '../select'
import { ComponentProps } from 'react'

export interface TextAreaProps extends ComponentProps<'div'> {}

export function TextAreaHeader(props: TextAreaProps) {
  return (
    <div className="grid grid-cols-2 gap-3" {...props}>
      <Select placeholder="" defaultValue="normal">
        <SelectItem text="Normal Text" value="normal" defaultChecked />
        <SelectItem text="Markdown" value="md" />
      </Select>

      <div className="flex items-center gap-1">
        <button className="rounded-md p-2 hover:bg-zinc-50" type="button">
          <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
        </button>
        <button className="rounded-md p-2 hover:bg-zinc-50" type="button">
          <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
        </button>
        <button className="rounded-md p-2 hover:bg-zinc-50" type="button">
          <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
        </button>
        <button className="rounded-md p-2 hover:bg-zinc-50" type="button">
          <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
        </button>
        <button className="rounded-md p-2 hover:bg-zinc-50" type="button">
          <ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3} />
        </button>
      </div>
    </div>
  )
}
