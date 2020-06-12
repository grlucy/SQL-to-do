import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { clearAllAction } from "../../actions";
import PopUp from "../PopUp";
import "./clearall.css";

function ClearAll() {
  const clearAllBoolean = useSelector((state) => state.clearAll);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearAllAction());
  };

  return (
    <>
      <button
        className="btn-style"
        id="clear-all"
        onClick={() => handleClick()}
      >
        CLEAR ALL
      </button>
      {clearAllBoolean && <PopUp handleClick={() => handleClick()} />}
    </>
  );
}

export default ClearAll;
