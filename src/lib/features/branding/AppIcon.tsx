import Image from "next/image";

export const AppIcon = ({ size }: { size: number }) => {
  return (
    <Image src="/assets/linkfy.png" alt="App logo" width={size} height={size} />
  );
};
