import { Box, Spinner, Heading } from "@chakra-ui/react";
import { useGameTrailer } from "../hooks/useGameTrailer";

interface Props {
  gameId: number;
}

export const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameTrailer(gameId);

  if (isLoading) return <Spinner />;
  if (error) return null;

  const firstTrailer = data.results[0];

  if (!firstTrailer) return null;

  return (
    <Box marginBottom={5}>
      <Heading>{firstTrailer?.name}</Heading>
      <Box
        borderWidth="1px"
        borderColor="gray.500"
        borderRadius={5}
        overflow="hidden"
        marginTop={3}
      >
        <video controls poster={firstTrailer?.preview}>
          <source src={firstTrailer?.data.max} type="video/mp4" />
        </video>
      </Box>
    </Box>
  );
};
