import CardSpotlight from "@/lib/components/ui/card-spotlight";
import { Separator } from "@/lib/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactElement } from "react";

const Features = (): ReactElement => {
  return (
    <>
      <Separator className="bg-white dark:bg-[#09090b]" />

      <div className="mx-auto max-w-3xl">
        <div className={cn(
          "flex flex-col items-center justify-center mt-10 md:mt-16",
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 gap-0 px-3 space-y-3 md:space-y-0"
        )}>
          <div className="col-span-1 md:col-span-2">
            <CardSpotlight>
              <Image
                src="/images/illustrations/1.png"
                alt="Shorten links"
                width={500}
                height={500}
              />
            </CardSpotlight>
          </div>
          <div className="space-y-3">
            <CardSpotlight>
              <Image
                src="/images/illustrations/2.png"
                alt="Shorten links"
                width={500}
                height={500}
              />
            </CardSpotlight>
            <CardSpotlight>
              <Image
                src="/images/illustrations/3.png"
                alt="Shorten links"
                width={500}
                height={500}
              />
            </CardSpotlight>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;