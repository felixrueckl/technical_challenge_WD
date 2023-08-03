import { Link } from "react-router-dom";
import React from "react";

function Navbar({ phonesList }) {
  return (
    <Navbar>
      <Link to="/">
        <button>Home</button>
      </Link>
      {phonesList &&
        phonesList.map((eachPhone) => {
          return (
            <Link to={`/phones/${eachPhone.id}`} key={eachPhone.id}>
              <button>{eachPhone.name}</button>
            </Link>
          );
        })}
    </Navbar>
  );
}

export default Navbar;
