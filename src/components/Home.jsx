import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const res = await get.json();
      setData(res);
    };
    getData();
    document.title = `(${state}) Users`;
  }, [state]);
  return (
    <div>
      <button className="button-49" onClick={() => setState(state + 1)}>
      one more data {state}
      </button>
      <Link to={`/context`}>Go to Context API</Link>
      {data.map((element, index) => {
        return (
          <>
            <Link to={`/${element.id}`}>
              <div className="data" key={index}>
                <h4>{element.firstName}</h4>
                <h4>{element.lastName}</h4>
                <h4>{element.email}</h4>
              </div>
            </Link>

            <Outlet />
          </>
        );
      })}
    </div>
  );
};

export default Home;
