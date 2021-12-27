import { useState } from "react";

export const GroceryInput = ({ getData }) => {
  const [text, setText] = useState("");
  const handelChange = (e) => {
    setText(e.target.value);
  };
  const handelData = () => {
    getData(text);
  };
  return (
    <>
      <input type="text" placeholder="Enter todo" onChange={handelChange} />
      <button onClick={handelData}>Add todo</button>
    </>
  );
};
