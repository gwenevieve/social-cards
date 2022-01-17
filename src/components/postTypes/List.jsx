import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const List = ({ title }) => {
  const [list, setList] = React.useState([
    "Peaches",
    "Strawberries",
    "Apples",
    "Milk",
  ]);

  const [edit, setEdit] = React.useState(false);
  const [value, setValue] = React.useState("");

  function handleDelete(item) {
    const removeItem = list.filter((i) => i !== item);
    setList(removeItem);
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleAdd(value) {
    if (value.length >= 1) {
      list.push(value);
      setValue("");
    }
  }

  return (
    <div className="list">
      {edit ? (
        <div>
          <h1 className="list-title">{title}</h1>
          <div className="list-content">
            <ol
              style={{
                textAlign: list.length >= 1 ? "" : "center",
              }}>
              {edit
                ? list.map((item, id) => (
                    <li key={`list-${id}`}>
                      {item}
                      <FontAwesomeIcon
                        className="list-delete"
                        onClick={() => handleDelete(item)}
                        icon={faMinus}
                      />
                    </li>
                  ))
                : list.map((item, id) => <li key={`list-${id}`}>{item}</li>)}
            </ol>
            <div className="list-actions">
              <input
                value={value}
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Item name"></input>
              <div className="controls">
                <button onClick={() => handleAdd(value)} className="button">
                  Add
                </button>
                <button className="button" onClick={() => setEdit(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="list-title">{title}</h1>
          <div className="list-content">
            <ol
              style={{
                textAlign: list.length >= 1 ? "" : "center",
              }}>
              {edit
                ? list.map((item, id) => (
                    <li key={`list-${id}`}>
                      {item}
                      <FontAwesomeIcon
                        className="list-delete"
                        onClick={() => handleDelete(item)}
                        icon={faMinus}
                      />
                    </li>
                  ))
                : list.map((item, id) => <li key={`list-${id}`}>{item}</li>)}
            </ol>
            <div className="list-actions row">
              <button className="button" onClick={() => setEdit(true)}>
                Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

List.defaultProps = {
  title: "Unknown",
};

List.propTypes = {
  title: PropTypes.string.isRequired,
};

export default List;
