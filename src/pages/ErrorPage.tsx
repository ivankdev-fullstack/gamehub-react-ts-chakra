import { Box, Heading, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Navbar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading>Oops, something went wrong...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occured."}
        </Text>
      </Box>
    </>
  );
};
