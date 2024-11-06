import { Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import { GameHeading } from "../components/GameHeading";
import { GamesGrid } from "../components/GamesGrid";
import { GenreList } from "../components/GenreList";
import { PlatformSelector } from "../components/PlatformSelector";
import { SortSelector } from "../components/SortSelector";

export const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading />
        <HStack marginBottom={3} spacing={3} paddingX={2}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
};
