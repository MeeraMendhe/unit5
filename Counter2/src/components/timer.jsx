import { useEffect, useState } from "react";

export const Timer = ({ start, end }) => {
  // console.log(start, end);
  // start = +start;
  // end = +end;
  // console.log(typeof start);
  const [counter, setCounter] = useState(start);
  useEffect(() => {
    const id = setInterval(() => {
      setCounter((p) => {
        if (p === end) {
          clearInterval(id);
          console.log("entering");
          return start;
        }
        return p + 1;
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <div>Count is : {counter}</div>;
};
