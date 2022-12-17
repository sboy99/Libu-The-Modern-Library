import React from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../../store/features";

const Register = () => {
  const dispatch = useDispatch();
  const closeForm = () => {
    dispatch(Actions.closeSignForm());
  };
  return (
    <div>
      Register
      <button onClick={closeForm}>Close</button>
    </div>
  );
};

export default Register;
