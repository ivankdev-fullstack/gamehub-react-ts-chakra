import { useParams } from "react-router-dom";
import { useGame } from "../hooks/useGame";
import {
  Heading,
  Spinner,
  Text,
  Box,
  Button,
  Grid,
  GridItem,
  SimpleGrid,
} from "@chakra-ui/react";
import { ExpandableText } from "../components/ExpandableText";
import { DefinitionItem } from "../components/DefinitionItem";
import { CriticScore } from "../components/CriticScore";
import { GameAttributes } from "../components/GameAttributes";
import { GameTrailer } from "../components/GameTrailer";

export const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </>
  );
};
