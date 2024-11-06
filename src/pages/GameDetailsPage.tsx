import { useParams } from "react-router-dom";
import { useGame } from "../hooks/useGame";
import { Heading, Spinner, Text, Box, Button } from "@chakra-ui/react";
import { ExpandableText } from "../components/ExpandableText";

export const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Box>
        <ExpandableText>{game.description_raw}</ExpandableText>
      </Box>
    </>
  );
};
