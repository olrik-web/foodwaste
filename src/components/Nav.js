import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [user] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
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
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  );
}
