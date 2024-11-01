import {
  HStack,
  Image,
  List,
  Button,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import { Genre, useGenres } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

export const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={4}>
        Genres
      </Heading>
      <List>
        {data?.map((g) => (
          <HStack paddingY={1} key={g.id}>
            <Image
              objectFit="cover"
              boxSize="32px"
              borderRadius="8px"
              src={g.image_background}
            />
            <Button
              fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(g)}
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
