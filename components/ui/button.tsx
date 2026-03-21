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
          "border-[#2f4de0] bg-[#2f4de0] px-6 py-3 text-white shadow-[0_18px_40px_rgba(47,77,224,0.24)] hover:-translate-y-0.5 hover:bg-[#243fd0] hover:shadow-[0_22px_52px_rgba(47,77,224,0.3)]",
        secondary:
          "border-stone-300 bg-[#fbf7f1] px-6 py-3 text-stone-900 hover:-translate-y-0.5 hover:border-stone-400 hover:bg-white",
        ghost:
          "border-transparent bg-transparent px-4 py-2 text-stone-600 hover:bg-stone-950/[0.04] hover:text-stone-950"
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
