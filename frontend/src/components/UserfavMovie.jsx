import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const UserfavMovie = (movies) => {
  return (
    <Box border={"2px solid teal"} p={"1rem"} mb="1rem">
      <Flex width={"100%"}>
        <Box>
          <Image
            src={
              movies.movie.Poster === "N/A"
                ? "https://st2.depositphotos.com/1105977/9877/i/600/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"
                : movies.movie.Poster
            }
            alt="poster"
            width={"40%"}
          />
        </Box>
        <Box>
          <Heading as={"h1"} >Title: {movies.movie.Title}</Heading>
          <Text >Year: {movies.movie.Year}</Text>
          <Text>Type: {movies.movie.Types}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default UserfavMovie;
