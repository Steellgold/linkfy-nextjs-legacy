import { Ref } from "react";

export const mergeRefs = (...refs: Ref<HTMLElement>[]) => {
  return (value: unknown) => {
    if (!value) return;
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value as HTMLElement);
      } else if (ref != null) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref.current = value;
      }
    });
  };
};
