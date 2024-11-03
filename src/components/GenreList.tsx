import {
  HStack,
  Image,
  List,
  Button,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import { useGameQueryStore } from "../store/gameQueryStore";

export const GenreList = () => {
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={4}>
        Genres
      </Heading>
      <List>
        {data?.results.map((g) => (
          <HStack paddingY={1} key={g.id}>
            <Image
              objectFit="cover"
              boxSize="32px"
              borderRadius="8px"
              src={g.image_background}
            />
            <Button
              fontWeight={g.id === selectedGenreId ? "bold" : "normal"}
              onClick={() => setGenreId(g.id)}
              fontSize="lg"
              variant="link"
              whiteSpace="normal"
              textAlign="left"
            >
              {g.name}
            </Button>
          </HStack>
        ))}
      </List>
    </>
  );
};
