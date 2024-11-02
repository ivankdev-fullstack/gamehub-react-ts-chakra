import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import { useGenre } from "../hooks/useGenre";
import { usePlatform } from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginBottom={4} as="h1">
      {heading}
    </Heading>
  );
};
