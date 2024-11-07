import { SimpleGrid, Text } from "@chakra-ui/react";
import { CriticScore } from "./CriticScore";
import { DefinitionItem } from "./DefinitionItem";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}

export const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl" gap={5} marginTop={5}>
      <DefinitionItem heading="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem heading="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem heading="Genres">
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem heading="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};
