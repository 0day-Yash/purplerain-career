import React from "react";
import { cn } from "@/lib/utils";

interface LandingHeadingProps {
  tag?: React.ReactNode;
  title: string;
  subtitle?: React.ReactNode;
  align?: "center" | "left" | "right";
  className?: string;
}

export function LandingHeading({
  tag,
  title,
  subtitle,
  align = "center",
  className,
}: LandingHeadingProps) {
  const alignClasses = {
    center: "items-center text-center",
    left: "items-start text-left",
    right: "items-end text-right",
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        alignClasses[align],
        className
      )}
    >
      {tag && (
        <span className="inline-flex items-center rounded-full border border-[--border] bg-[--surface-secondary] px-3.5 py-1 text-xs font-medium text-[--text-secondary] shadow-sm">
          {tag}
        </span>
      )}
      <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl text-[--text-primary] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg font-light text-[--text-tertiary] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
