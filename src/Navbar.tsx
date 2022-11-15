import React from "react";
import { useAppDispatch } from "./app/hooks";
import { login } from "./features/auth/auth-slice";

function Navbar() {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(login());
  };

  return (
    <>
      <div>Navbar</div>
      <button onClick={handleClick}>Login</button>
    </>
  );
}

export default Navbar;
