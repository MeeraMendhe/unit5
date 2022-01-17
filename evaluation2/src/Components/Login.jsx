import { useState } from "react";
import { useDispatch } from "react-redux";
// import { Navigate } from "react-router-dom";
import { login } from "../store/Login/action";

export const Login = () => {
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.auth);
  // const { isAuth } = data;
  const [text, setText] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };
  const submitData = (e) => {
    e.preventDefault();
    dispatch(login(text));
  };
  // if (isAuth) {
  //   return <Navigate to={"/"} />;
  // }
  return (
    <form action="" onSubmit={submitData}>
      <input
        type="text"
        placeholder="Enter email"
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Enter password"
        name="password"
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
};
