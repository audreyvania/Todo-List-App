import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../redux/action/todoAction";

const Add = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList(inputValue));
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <section id="add">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What to do"
          value={inputValue}
          onChange={handleChange}
        />{" "}
        <button type="submit"> Add </button>{" "}
      </form>{" "}
    </section>
  );
};

export default Add;
