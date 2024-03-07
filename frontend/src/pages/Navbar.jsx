import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/" className="mt-3 ">
      <Nav.Item className="fs-1">
        <Link to="/">
          {" "}
          <Button colorScheme="teal" variant="outline">
            Search
          </Button>
        </Link>
      </Nav.Item>
      <Nav.Item className="fs-1">
        <Link to={"/users"}>
          <Button colorScheme="teal" variant="outline">
            See your Favorite Movie
          </Button>
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
