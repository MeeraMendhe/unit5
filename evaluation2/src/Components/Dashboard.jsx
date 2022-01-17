import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Admin } from "./Admin";
import { User } from "./User";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const data = useSelector((state) => state.auth);

  const user = useSelector((state) => state.app.data);
  console.log(user);

  const { isAuth, isAdmin } = data;

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div>
      {isAdmin ? <Admin /> : ""}
      {user.map((e) => (
        <User data={e} />
      ))}
      {!isAdmin ? <Link to="/aplliedJobs">Applied Jobs</Link> : ""}
    </div>
  );
};
