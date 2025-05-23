import Image from 'next/image';

interface AppLogoProps {
  width?: number;
}

export default function AppLogo({ width = 70 }: AppLogoProps) {
  return (
    <Image src="/app-logo.png" width={width} height={width} alt="App logo" />
  );
}