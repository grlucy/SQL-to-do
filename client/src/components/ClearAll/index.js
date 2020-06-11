import React, { useEffect } from "react";
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
      <button id="clear-all" onClick={() => handleClick()}>
        CLEAR ALL
      </button>
      {clearAllBoolean && <PopUp />}
    </>
  );
}

export default ClearAll;
