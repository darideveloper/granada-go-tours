import * as React from "react"

import { cn } from "@/lib/utils"

function Select({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-brand-charcoal/20",
        className
      )}
      {...props}
    />
  )
}

export { Select }
