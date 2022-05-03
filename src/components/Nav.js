import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  console.log(user);
  if (user.admin === "1") {
    return (
      <nav>
        <NavLink to="/">Posts</NavLink>
        <NavLink to="/create">Create</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    );
  }
  return (
    <nav>
      <NavLink to="/">Posts</NavLink>
      {/* <NavLink to="/create">Create</NavLink> */}
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
}
