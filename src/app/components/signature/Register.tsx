import React from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../../store/features";
import Styles from "../../../css/utils.module.css";

const Register = () => {
  const dispatch = useDispatch();
  const closeForm = () => {
    dispatch(Actions.closeSignForm());
  };
  return (
    <div>
      <div>Register</div>
      <div className="flex items-center gap-2">
        <button
          onClick={closeForm}
          className={`${Styles["btn"]} ${Styles["cancel-btn"]} ${Styles["bordered-btn"]}`}
        >
          Close
        </button>
        <button className={`${Styles["btn"]} ${Styles["submit-btn"]}`}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Register;
