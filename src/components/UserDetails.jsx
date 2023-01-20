import React, { useState, useEffect } from "react";
import { useParams,useSearchParams } from "react-router-dom";
const UserDetails = () => {
    const {userId}=useParams();
    const [data, setData] = useState([]);
    const [searchParams,setSearchParams]=useSearchParams();

    console.log(searchParams.get(`name`));
    // http://localhost:3000/1001?name=Vishal
    const reset =()=>{
        setSearchParams({})
    }
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
        {/* <h3>{data[0].id}</h3>
        <img src={data[0].imageUrl} alt="" />
        <h3>{data[0].email}</h3>
        <h3>{data[0].firstName}</h3>
        <h3>{data[0].lastName}</h3> */}
        <h2>{searchParams.get(`name`)}</h2>
        <button onClick={()=>reset()}>reset</button>
 
    </div>
  )
}

export default UserDetails
