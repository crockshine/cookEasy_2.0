import * as React from "react"

import {cn} from "@/src/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({className, type, ...props}, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-full bg-background border border-primary px-3 py-2 " +
                    "text-base placeholder-ni ring-offset-primary file:border-0 file:bg-transparent file:text-sm " +
                    "file:font-medium file:text-foreground focus-visible:outline-none " +
                    "focus-visible:ring-[1px] focus-visible:ring-primary disabled:cursor-not-allowed " +
                    "disabled:opacity-50 md:text-sm",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Input.displayName = "Input"

export {Input}
