import React, { useState, useEffect } from "react";


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
      document.title=`(${state}) Users`
    }, [state]); 
  return (
    <div ><button className="button-49" onClick={() => setState(state + 1)}> one more data {state}</button>
    {
      data.map((element,index)=>{
        return(
          <div className="data" key={index}>
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.email}</h4>
          </div>
        )
      })
    }</div>
  )
}

export default Home