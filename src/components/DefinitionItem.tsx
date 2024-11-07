import { Text, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  heading: string;
  children: ReactNode;
}

export const DefinitionItem = ({ heading, children }: Props) => {
  return (
    <>
      <Box>
        <Text color="gray.600" fontWeight="bold" fontSize="md">
          {heading}
        </Text>
        <dd>{children}</dd>
      </Box>
    </>
  );
};
