import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import { GameHeading } from "./components/GameHeading";
import { GamesGrid } from "./components/GamesGrid";
import { GenreList } from "./components/GenreList";
import { Navbar } from "./components/Navbar";
import { PlatformSelector } from "./components/PlatformSelector";
import { SortSelector } from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
  pageSize: number;
}

export const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    pageSize: 8,
  } as GameQuery);

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
        <Navbar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenreId={gameQuery?.genreId}
            onSelectGenreId={(genreId) =>
              setGameQuery({ ...gameQuery, genreId })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack marginBottom={3} spacing={3}>
          <PlatformSelector
            selectedPlatformId={gameQuery?.platformId}
            onSelectPlatformId={(platformId) =>
              setGameQuery({ ...gameQuery, platformId })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};
