import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

export const User = ({ data }) => {
  const a = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { isAdmin } = a;
  let d = data;
  const apply = (d) => {
    dispatch(apply(d));
  };
  return (
    <div>
      <li>{data.company}</li>
      <li>{data.title}</li>
      <li>{data.salary}</li>
      <li>{data.discription}</li>
      <li>{data.location}</li>
      <li>{data.type}</li>
      {!isAdmin ? <button onClick={() => apply(d)}>Apply</button> : ""}
    </div>
  );
};
