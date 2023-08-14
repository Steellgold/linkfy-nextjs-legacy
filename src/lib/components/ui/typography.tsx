import {
  ComponentProps,
  VariantProps,
  classed,
  deriveClassed,
} from "@tw-classed/react";

export const TypographyClassed = classed("div", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
      h3: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      base: "",
      quote: "mt-6 border-l-2 pl-6 italic",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      link: "text-indigo-500 font-medium hover:underline",
    },
    italic: {
      true: "italic",
      false: "",
    },
    bold: {
      true: "font-bold",
      false: "",
    },
    color: {
      muted: "text-muted-foreground",
      card: "text-card-foreground",
      primary: "text-primary-foreground",
      secondary: "text-secondary-foreground",
      background: "text-background-foreground",
      link: "text-indigo-500",
    },
  },
  defaultVariants: {
    variant: "p",
    italic: false,
    color: "background",
  },
});

type TypographyVariants = VariantProps<typeof TypographyClassed>;

const VariantTag: Record<
  Exclude<TypographyVariants["variant"], undefined>,
  string
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p: "p",
  quote: "blockquote" as "p",
  code: "code",
  lead: "p",
  large: "p",
  small: "p",
  muted: "p",
  link: "a",
  base: "p",
} as const;

export type TypographyProps = ComponentProps<typeof TypographyClassed>;

export const Typography = deriveClassed<typeof TypographyClassed, TypographyProps>(
  ({ children, variant = "p", color, ...rest }, ref) => {
    const Tag = (rest.as ?? VariantTag[variant]) as TypographyProps["as"];

    if (variant === "muted" || (variant === "lead" && !color)) {
      color = "muted";
    }

    if (variant === "link" && !color) {
      color = "link";
    }

    return (
      <TypographyClassed variant={variant} as={Tag} {...rest} ref={ref}>
        {children}
      </TypographyClassed>
    );
  }
);
