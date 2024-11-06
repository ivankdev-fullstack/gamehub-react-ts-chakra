import { Heading } from "@chakra-ui/react";
import { useGenre } from "../hooks/useGenre";
import { usePlatform } from "../hooks/usePlatform";
import { useGameQueryStore } from "../store/gameQueryStore";

export const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const genre = useGenre(genreId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading marginBottom={4} as="h1" paddingX={2}>
      {heading}
    </Heading>
  );
};
