"use client";

import { mergeRefs } from "@/lib/react/mergeReactRef";
import clsx from "clsx";
import { ComponentPropsWithoutRef, forwardRef, useEffect, useRef } from "react";
import { Textarea } from "./textarea";

export const AutoResizableTextarea = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<"textarea">
>(({ onChange, className, rows = 1, ...props }, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight + 2}px`;
    }
  };

  useEffect(() => {
    handleChange();

    setTimeout(() => {
      handleChange();
    }, 100);
  }, []);

  return (
    <Textarea
      ref={mergeRefs(textareaRef, ref)}
      onChange={(e) => {
        handleChange();
        onChange?.(e);
      }}
      rows={rows}
      className={clsx(className, "resize-none")}
      {...props}
    />
  );
});
AutoResizableTextarea.displayName = "AutoResizableTextarea";
