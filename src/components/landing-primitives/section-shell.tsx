import React from "react";
import { cn } from "@/lib/utils";

interface SectionShellProps extends React.HTMLAttributes<HTMLElement> {
  container?: "default" | "full";
  id?: string;
}

export function SectionShell({
  container = "default",
  id,
  className,
  children,
  ...props
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-14 md:py-[72px] flex flex-col items-center gap-10 relative w-full",
        className
      )}
      {...props}
    >
      {container === "default" ? (
        <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center gap-10 w-full">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
