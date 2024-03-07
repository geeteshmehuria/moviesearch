import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import UserfavMovie from "../components/UserfavMovie";

const User = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchData();
  }, [movies]);
  const fetchData = async () => {
    const data = await axios.get("http://localhost:3000/movies");
    // console.log(data.data.data);
    setMovies(data.data.data);
    // setMovies()
  };
  console.log(movies);
  return (
    <>
      <Box
        w={"80%"}
        m={"auto"}
        mt={"2rem"}
        border={"2px solid teal"}
        p={"1rem"}
      >
        {movies.map((movies) => {
          return <UserfavMovie key={movies.id} movie={movies} />;
        })}
      </Box>
    </>
  );
};

export default User;
