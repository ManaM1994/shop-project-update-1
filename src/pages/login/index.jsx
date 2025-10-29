import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);

  return (
    <div>
      <h1>welcome to login page</h1>
      <button
        onClick={() => {
          setAuth({ user: "Mana", id: 2 });
        }}
      >
        {" "}
        login
      </button>
      {auth?.user ? <p>{auth.user}</p> : null}
    </div>
  );
};
