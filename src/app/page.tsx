import { Divider, Input, Select, SelectItem, SettingsTabs } from '@/components'
import { Mail } from 'lucide-react'

import * as FileInput from '@/components/form/file-input'
import * as TextArea from '@/components/form/textarea'
import { Button } from '@/components/button'
import { ThemeChangerButton } from '@/components/theme-changer-button'

export default function Home() {
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
          Settings
        </h1>

        <ThemeChangerButton />
      </div>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col items-baseline justify-between gap-4 lg:flex-row lg:items-center">
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal Info
            </h2>

            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <Divider className="mt-5" />

        <form
          className="mt-6 flex w-full flex-col gap-5 "
          id="settings"
          action=""
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstname" defaultValue="Alan" />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 lg:sr-only dark:text-zinc-100"
                >
                  Last Name
                </label>

                <Input.Root>
                  <Input.Control id="lastName" defaultValue="Ferreira" />
                </Input.Root>
              </div>
            </div>
          </div>

          <Divider />

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
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

          <div className="flex grid-cols-form flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <span className="mt-0.5  block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger text="SVG, PNG, JPG or GIF (max. 800x400px)" />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <Divider />

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="Senior DEV" />
            </Input.Root>
          </div>

          <Divider />

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
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

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
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

          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
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

          <div className="flex grid-cols-form flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portfolio projects
              <span className="mt-0.5  block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <FileInput.Root>
              <FileInput.Trigger text="DOC, PDF and similar types of the documents." />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <Divider />

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
