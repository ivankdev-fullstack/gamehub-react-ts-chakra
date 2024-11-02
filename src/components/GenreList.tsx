import {
  HStack,
  Image,
  List,
  Button,
  Spinner,
  Heading,
} from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";

interface Props {
  selectedGenreId?: number;
  onSelectGenreId: (genreId: number) => void;
}

export const GenreList = ({ selectedGenreId, onSelectGenreId }: Props) => {
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
              onClick={() => onSelectGenreId(g.id)}
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
