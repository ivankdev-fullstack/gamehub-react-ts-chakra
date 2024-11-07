import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <HStack paddingY={3}>
        <Image
          src={logo}
          boxSize="60px"
          onClick={() => navigate("/")}
          _hover={{ cursor: "pointer" }}
        />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};
