import React from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../../store/features";

const Login = () => {
  const dispatch = useDispatch();
  const closeForm = () => {
    dispatch(Actions.closeSignForm());
  };
  return (
    <div>
      Login
      <button onClick={closeForm}>Close</button>
    </div>
  );
};

export default Login;
