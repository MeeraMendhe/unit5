import { useState } from "react";
import { useDispatch } from "react-redux";
import { jobData } from "../store/app/action";
// import { useSelector } from "react-redux";

export const Admin = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitData = (e) => {
    e.preventDefault();
    dispatch(jobData(data));
  };

  return (
    <form action="" onSubmit={submitData}>
      <h3>Admin page</h3>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Company"
        name="company"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Job Title"
        name="job"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Salary Range"
        name="salary"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Job Discription"
        name="discription"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Locatioin"
        name="location"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="Job type"
        name="type"
      />
      <input type="submit" />
    </form>
  );
};
