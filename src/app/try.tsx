/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import { Button } from "@/lib/components/ui/button";
import { Input } from "@/lib/components/ui/input";
import { Link } from "lucide-react";

const Try = (): React.ReactElement => {

  return (
    <>
      <div className="flex items-center justify-center mt-10 md:mt-16 px-3 mx-auto max-w-md gap-2">
        <Input className="w-full" placeholder="https://example.com" />
        <Button variant={"outline"}>
          <Link size={16} />
        </Button>
      </div>
    </>
  );
};

export default Try;