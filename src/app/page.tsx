import { Divider, Input, Select, SelectItem, SettingsTabs } from '@/components'
import { Mail } from 'lucide-react'

import * as FileInput from '@/components/form/file-input'
import * as TextArea from '@/components/form/textarea'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>

            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
              form="settings"
            >
              Save
            </button>
          </div>
        </div>

        <Divider className="mt-5" />

        <form
          className="mt-6 flex w-full flex-col gap-5 "
          id="settings"
          action=""
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstname" defaultValue="Alan" />
              </Input.Root>

              <Input.Root>
                <Input.Control defaultValue="Ferreira" />
              </Input.Root>
            </div>
          </div>

          <Divider />

          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email Address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="alanjjr83@gmail.com"
              />
            </Input.Root>
          </div>

          <Divider />

          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5  block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <Divider />

          <div className="grid grid-cols-form gap-3">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="Senior DEV" />
            </Input.Root>
          </div>

          <Divider />

          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <Select placeholder="Select a Country...">
              <SelectItem text="Brazil" value="br" />
              <SelectItem text="United States" value="us" />
              <SelectItem text="Canada" value="cn" />
              <SelectItem text="Mexico" value="mx" />
            </Select>
          </div>

          <Divider />

          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Time Zone
            </label>

            <Select placeholder="Select a Time Zone">
              <SelectItem
                text="Pacific Standard Time (UTC-08:00)"
                value="utc8"
              />
              <SelectItem
                text="America/São Paulo Time (UTC-03:00)"
                value="utc3"
              />
            </Select>
          </div>

          <Divider />

          <div className="grid grid-cols-form gap-3">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5  block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <TextArea.Root>
              <TextArea.Header />
              <TextArea.Control
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </TextArea.Root>
          </div>

          <Divider />

          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="mt-0.5  block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <Divider />

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
