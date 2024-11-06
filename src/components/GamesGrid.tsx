import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGames } from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardContainer } from "./GameCardContainer";
import { GameCardSkeleton } from "./GameCardSkeleton";

export const GamesGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return <Text>{error.message}</Text>;

  const fetchGamesCount = () =>
    data?.pages.reduce((acc, next) => acc + next.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchGamesCount()}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        marginBottom={50}
        padding={2}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages &&
          data.pages.map((page, idx) => (
            <React.Fragment key={idx}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};
