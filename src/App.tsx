import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { GameHeading } from "./components/GameHeading";
import { GamesGrid } from "./components/GamesGrid";
import { GenreList } from "./components/GenreList";
import { Navbar } from "./components/Navbar";
import { PlatformSelector } from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";

export const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      paddingX={5}
    >
      <GridItem area="nav" marginBottom={2}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading />
        <HStack marginBottom={3} spacing={3}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
};
