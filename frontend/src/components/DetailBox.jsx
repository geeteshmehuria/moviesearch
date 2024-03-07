import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const DetailBox = (movie) => {
  const handleAdd = async (movie) => {
    console.log(movie);
    const data = await axios.post("http://localhost:3000/movies", {
      Poster: movie.Poster,
      Title: movie.Title,
      Types: movie.Type,
      Year: movie.Year,
    });

console.log(">>>>>",data);
  };
//   console.log(movie);
  return (
    <>
      <Box border={"2px solid teal"} p={"1rem"} mb="1rem">
        <Flex width={"100%"}>
          <Box>
            <Image
              src={
                movie.movie.Poster === "N/A"
                  ? "https://st2.depositphotos.com/1105977/9877/i/600/depositphotos_98775856-stock-photo-retro-film-production-accessories-still.jpg"
                  : movie.movie.Poster
              }
              alt="poster"
              width={"40%"}
            />
          </Box>
          <Box>
            <Heading as={"h1"}>Title: {movie.movie.Title}</Heading>
            <Text>Year: {movie.movie.Year}</Text>
            <Text>Type: {movie.movie.Type}</Text>
            <Button onClick={() => handleAdd(movie.movie)}>Add to Favorite</Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default DetailBox;
