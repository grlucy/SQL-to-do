import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  listLengthAction,
  completeLengthAction,
  percentageAction,
} from "../../actions";
import "./progress.css";

function Progress() {
  const todoList = useSelector((state) => state.toDoList);
  const listLength = useSelector((state) => state.listLength);
  const completeLength = useSelector((state) => state.completeLength);
  const percentage = useSelector((state) => state.percentage);
  const dispatch = useDispatch();

  useEffect(() => {
    const totalLen = todoList.length;
    const completeLen = todoList.filter((task) => task.complete > 0).length;
    const percentageTotal = Math.floor((completeLen / totalLen) * 100);
    dispatch(listLengthAction(totalLen));
    dispatch(completeLengthAction(completeLen));
    dispatch(percentageAction(percentageTotal));
  }, [todoList]);

  return (
    <>
      {todoList.length > 0 && (
        <figure>
          <div
            style={{
              background: `linear-gradient(to right, #b7931c ${percentage}%, #471f5b ${percentage}%)`,
              height: "1rem",
              borderRadius: "8px",
              margin: "0 auto 1rem",
              maxWidth: "736px",
              width: "70vw",
            }}
          ></div>
          <p>
            {completeLength} / {listLength} tasks complete
          </p>
        </figure>
      )}
    </>
  );
}

export default Progress;
