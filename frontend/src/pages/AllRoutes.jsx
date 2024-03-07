import { Route, Routes } from "react-router";
import User from "./User";
import Search from "./Search";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/users" element={<User />} />
        <Route path="/" element={<Search />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
