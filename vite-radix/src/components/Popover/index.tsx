import { styled } from "@stitches/react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
export const PopoverContent = styled(PopoverPrimitive.Content, {})
