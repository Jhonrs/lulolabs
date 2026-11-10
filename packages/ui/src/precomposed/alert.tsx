import type { ComponentProps, ReactNode } from "react"
import {
  Alert as AlertRoot,
  AlertTitle,
  AlertDescription,
} from "@lulolabs/ui/components/alert"

type AlertProps = Omit<ComponentProps<typeof AlertRoot>, "title"> & {
  title?: ReactNode
  description?: ReactNode
  icon?: ReactNode
}

export function Alert({ title, description, icon, ...props }: AlertProps) {
  return (
    <AlertRoot {...props}>
      {icon}
      {title && <AlertTitle>{title}</AlertTitle>}
      {description && <AlertDescription>{description}</AlertDescription>}
    </AlertRoot>
  )
}