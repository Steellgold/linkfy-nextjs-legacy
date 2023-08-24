import { TypeAnimation } from "react-type-animation";
import { cn } from "@/lib/utils";
import { Outfit, Shrikhand } from "next/font/google";
import { ReactElement } from "react";

/* eslint-disable @typescript-eslint/no-misused-promises */
const outfit = Outfit({ subsets: ["latin"] });
const shrikhand = Shrikhand({ subsets: ["latin"],weight: "400" });

const Header = (): ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 md:mt-16 px-3">
      <h1 className={cn(outfit.className, "text-3xl md:text-5xl font-bold flex flex-col items-center justify-center")}>
        <span>A shortener tool</span>
        <span>for <TypeAnimation
          repeat={Infinity}
          speed={{
            type: "keyStrokeDelayInMs",
            value: 115
          }}
          cursor={false}
          className={shrikhand.className}
          preRenderFirstString
          style={{
            background: "linear-gradient(90deg, #34d399 0%, #059669 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
          sequence={["creators", 1000, "formators", 1000, "influencers", 1000 ]} />
        </span>
      </h1>

      <p className="text-center text-base text-muted-foreground mt-3 w-auto">
        Don&apos;t waste your time with long links, just shorten them.
      </p>
    </div>
  );
};

export default Header;