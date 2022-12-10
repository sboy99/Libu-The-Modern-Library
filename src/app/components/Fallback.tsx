import React from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../store/features";

const Fallback = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(Actions.startFallingBack());
    return () => {
      dispatch(Actions.stopFallingBack());
    };
  }, []);
  return <></>;
};

export default Fallback;
