import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { login } from "../../features/auth/auth-slice";
import "./Navbar.scss";

function Navbar() {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(login());
  };

  return (
    <nav className="navbar">
      <div>Navbar</div>
      <span className="spacer"></span>
      <button onClick={handleClick}>Login</button>
    </nav>
  );
}

export default Navbar;
