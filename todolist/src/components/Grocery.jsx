import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { nanoid } from "nanoid";

export const Grocery = () => {
  const [List, setList] = useState([]);
  const getData = (data) => {
    const payload = {
      title: data,
      status: false,
      id: nanoid(7)
    };

    setList([...List, payload]);
  };
  const handelToggel = (id) => {
    const updatedList = List.filter(function (a) {
      if (a.id !== id) {
        return true;
      } else {
        return false;
      }
    });
    setList(updatedList);
  };
  return (
    <>
      <GroceryInput getData={getData} />
      {List.map((e, i) => (
        <GroceryList key={e.id} {...e} handelToggel={handelToggel} />
      ))}
    </>
  );
};
