"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";

export const Icon = (): ReactElement => {
  const { theme } = useTheme();

  return (
    <Link href={"/"}>
      {(theme == "dark" && (
        <Image src={"/assets/logo-light.png"} alt={"Linkfy"} width={40} height={40} />
      )) || (theme == "light" && (
        <Image src={"/assets/logo-dark.png"} alt={"Linkfy"} width={40} height={40} />
      )) || (
        <Image src={"/assets/logo-light.png"} alt={"Linkfy"} width={40} height={40} />
      )}
    </Link>
  );
};
