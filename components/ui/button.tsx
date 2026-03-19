"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full border text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "premium-outline gradient-button border-white/15 bg-[linear-gradient(120deg,rgba(56,189,248,0.96),rgba(99,102,241,0.92)_34%,rgba(168,85,247,0.92)_68%,rgba(236,72,153,0.94))] px-6 py-3 text-white shadow-[0_18px_48px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 hover:shadow-[0_24px_64px_rgba(99,102,241,0.4)]",
        secondary:
          "border-white/12 bg-white/[0.06] px-6 py-3 text-white backdrop-blur-xl hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.1]",
        ghost:
          "border-transparent bg-transparent px-4 py-2 text-white/72 hover:bg-white/[0.06] hover:text-white"
      },
      size: {
        default: "",
        sm: "px-4 py-2 text-xs",
        lg: "px-7 py-3.5 text-sm"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
