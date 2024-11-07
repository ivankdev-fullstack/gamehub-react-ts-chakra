import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Box paddingX={5} marginY={5}>
        <Outlet />
      </Box>
    </>
  );
};
