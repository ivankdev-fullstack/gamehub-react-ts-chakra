import { Box, Spinner, Heading } from "@chakra-ui/react";
import { useGameTrailer } from "../hooks/useGameTrailer";

interface Props {
  gameId: number;
}

export const GameTrailer = ({ gameId }: Props) => {
  const { data: trailer, error, isLoading } = useGameTrailer(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <Box marginY="30px">
      <Heading>{trailer.name}</Heading>
      <Box
        borderWidth="1px"
        borderColor="gray.500"
        borderRadius={10}
        overflow="hidden"
        margin="0px auto"
        width="75%"
        marginTop={3}
      >
        <video controls poster={trailer.preview}>
          <source src={trailer.data.max} type="video/mp4" />
        </video>
      </Box>
    </Box>
  );
};
