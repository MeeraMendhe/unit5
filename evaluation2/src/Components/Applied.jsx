import { useSelector } from "react-redux";

export const Applied = () => {
  const user = useSelector((state) => state.app.ap);
  // console.log(user);
  return (
    <div>
      {user.map((e) => (
        <div>
          <li>{e.company}</li>
          <li>{e.title}</li>
          <li>{e.salary}</li>
          <li>{e.discription}</li>
          <li>{e.location}</li>
          <li>{e.type}</li>
        </div>
      ))}
    </div>
  );
};
