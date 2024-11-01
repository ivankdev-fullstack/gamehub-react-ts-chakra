import { Card, Image, CardBody, Heading, HStack } from "@chakra-ui/react";
import { PlatformIconsList } from "./PlatformIconsList";
import { CriticScore } from "./CriticScore";
import { optimizeImage } from "../services/optimize-image";
import { Emoji } from "./Emoji";
import { Game } from "../services/gameService";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={optimizeImage(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={5}>
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};
