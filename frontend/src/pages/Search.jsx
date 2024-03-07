import { Box, Button, Flex, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import DetailBox from "../components/DetailBox";

const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const apiKey = "2938dcb7";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`
      );
      setData(response.data.Search);
      // console.log(response.data.Search);
    } catch (error) {
      console.log(error);
    }
    // console.log(search);
  };
  return (
    <>
      <Box>
        <Box
          width={"60%"}
          mt={"2rem"}
          display={"flex"}
          gap={"8rem"}
          //   border={"2px solid teal"}
          p={"1rem"}
          m={"auto"}
          justifyContent={"center"}
        >
          <form>
            <Flex w={"100%"}>
              <Input
                type="text"
                variant="outline"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                border={"1px solid teal"}
              />
              <Button
                type="submit"
                colorScheme="teal"
                variant="outline"
                w={"30%"}
                onClick={handleSubmit}
              >
                Search
              </Button>
            </Flex>
          </form>
        </Box>

        <Box w={"80%"} m={"auto"} mt={"2rem"}>
          {data.map((movie) => (
            <DetailBox key={movie.imdbID} movie={movie} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Search;
