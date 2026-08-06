import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const landingButtonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[--control] disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      intent: {
        primary:
          "bg-[hsl(var(--accent-500))] hover:bg-[hsl(var(--accent-600))] text-[--text-on-accent-primary]",
        secondary:
          "bg-[--surface-secondary] text-[--text-primary] border border-[hsl(0_0%_18%)] hover:bg-[--surface-tertiary]",
        outline:
          "border border-[hsl(0_0%_18%)] bg-transparent text-[--text-secondary] hover:bg-white/5 hover:text-[--text-primary]",
        tertiary:
          "bg-[--text-primary] text-[--surface-primary] hover:bg-[--text-secondary]",
        "hero-primary":
          "h-14 w-full md:w-auto px-8 bg-[hsl(var(--accent-500))] hover:bg-[hsl(var(--accent-600))] text-[--text-on-accent-primary] text-base font-medium",
        "hero-secondary":
          "h-14 w-full md:w-auto px-8 border-x border-y-0 border-[hsl(0_0%_18%)] bg-transparent text-[--text-secondary] hover:bg-white/5 hover:text-[--text-primary] text-base font-medium backdrop-blur-xl",
      },
      size: {
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-6 text-base",
        hero: "h-14 px-8 text-base",
      },
      shape: {
        pill: "rounded-full",
        square: "rounded-none",
        rounded: "rounded-md",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      shape: "pill",
    },
  }
);

interface LandingButtonProps extends VariantProps<typeof landingButtonVariants> {
  href?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconSide?: "left" | "right";
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export function LandingButton({
  intent,
  size,
  shape,
  href,
  disabled,
  icon,
  iconSide = "left",
  className,
  children,
  target,
  rel,
  onClick,
  type = "button",
}: LandingButtonProps) {
  const classes = cn(landingButtonVariants({ intent, size, shape }), className);

  const content = (
    <>
      {icon && iconSide === "left" && (
        <span className="mr-2 flex items-center">{icon}</span>
      )}
      {children}
      {icon && iconSide === "right" && (
        <span className="ml-2 flex items-center">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  );
}

