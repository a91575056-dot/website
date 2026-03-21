"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => <DialogPrimitive.Title ref={ref} className={cn(className)} {...props} />);
SheetTitle.displayName = DialogPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => <DialogPrimitive.Description ref={ref} className={cn(className)} {...props} />);
SheetDescription.displayName = DialogPrimitive.Description.displayName;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-stone-950/24 backdrop-blur-md" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-y-0 right-0 z-50 flex w-[88vw] max-w-sm flex-col border-l border-stone-300/80 bg-[linear-gradient(180deg,rgba(251,247,241,0.98),rgba(245,239,231,0.98))] p-6 shadow-[0_26px_70px_rgba(28,25,23,0.14)]",
        className
      )}
      {...props}
    >
      <SheetClose className="ml-auto rounded-full border border-stone-300 bg-white/90 p-2 text-stone-700 transition hover:bg-white">
        <X className="h-4 w-4" />
        <span className="sr-only">Close menu</span>
      </SheetClose>
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
SheetContent.displayName = "SheetContent";

export { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger };
