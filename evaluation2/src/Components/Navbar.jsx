import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      &nbsp; &nbsp;
      <Link to="/">Dashboard</Link>
    </div>
  );
};
