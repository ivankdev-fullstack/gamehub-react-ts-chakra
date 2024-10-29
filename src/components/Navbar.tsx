import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

interface Props {
  onSearch: (value: string) => void;
}

export const Navbar = ({ onSearch }: Props) => {
  return (
    <>
      <HStack paddingY={3}>
        <Image src={logo} boxSize="60px" />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};
