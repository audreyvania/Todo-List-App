import React, { useState } from "react";
import DoneIcon from "../assets/done-icon.svg";
import EditIcon from "../assets/edit-icon.svg";
import DeleteIcon from "../assets/delete-icon.svg";
import PropTypes from "prop-types";
import { doneList, editList, removeList } from "../redux/action/todoAction";
import { useDispatch } from "react-redux";

const List = (props) => {
  const [isEditPopUp, setEditPopUp] = useState(false);
  const [editInputValue, setEditInputValue] = useState("");

  const toggleEdit = () => {
    setEditPopUp(!isEditPopUp);
    setEditInputValue("");
  };

  const dispatch = useDispatch();

  const handleDone = (index) => {
    dispatch(doneList(index));
  };

  const handleRemove = (index) => {
    dispatch(removeList(index));
  };

  const handleEdit = (index, inputValue) => {
    dispatch(editList(index, inputValue));
    toggleEdit();
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    handleEdit(props.urutan, editInputValue);
  };

  const handleChange = (e) => {
    setEditInputValue(e.target.value);
  };

  return (
    <>
      <div className="list-container">
        <div className="left-list">
          {" "}
          {props.button && (
            <img
              src={DoneIcon}
              alt=""
              onClick={() => handleDone(props.urutan)}
            />
          )}{" "}
          <p> {props.value} </p>{" "}
        </div>{" "}
        {props.button && (
          <div className="right-list">
            <img
              src={EditIcon}
              alt=""
              onClick={() => toggleEdit(props.urutan)}
            />{" "}
            <img
              src={DeleteIcon}
              alt=""
              onClick={() => handleRemove(props.urutan)}
            />{" "}
          </div>
        )}
      </div>
      {isEditPopUp && (
        <div className="edit-popup">
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor=""> Edit To do </label>{" "}
            <input
              type="text"
              placeholder={props.value}
              value={editInputValue}
              onChange={handleChange}
            />{" "}
            <div className="button">
              <p onClick={() => toggleEdit(props.urutan)}> Cancel </p>{" "}
              <button type="submit"> Edit </button>{" "}
            </div>{" "}
          </form>{" "}
        </div>
      )}
      {isEditPopUp && <div className="overlay"> </div>}{" "}
    </>
  );
};

List.propTypes = {
  button: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  urutan: PropTypes.number.isRequired,
};

export default List;
