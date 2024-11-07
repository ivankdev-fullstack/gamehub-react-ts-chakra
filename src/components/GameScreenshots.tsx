import {
  Box,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useGameScreenshots } from "../hooks/useGameScreenshots";

interface Props {
  gameId: number;
}

export const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameScreenshots(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={5}
    >
      {data?.results.map((s) => (
        <Image key={s.id} src={s.image} />
      ))}
    </SimpleGrid>
  );
};