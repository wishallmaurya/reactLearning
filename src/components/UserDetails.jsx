import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const UserDetails = () => {
    const {userId}=useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        
      const getData = async () => {
        const get = await fetch(
          `https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`
        );
        const res = await get.json();
        setData(res);
      };
      getData();
    },[userId]); 
    
console.log(data);
  return (
    <div>
        <h3>{data[0].id}</h3>
        <img src={data[0].imageUrl} alt="" />
        <h3>{data[0].email}</h3>
        <h3>{data[0].firstName}</h3>
        <h3>{data[0].lastName}</h3>
 
    </div>
  )
}

export default UserDetails
