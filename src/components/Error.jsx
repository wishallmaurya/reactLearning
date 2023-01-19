import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate=useNavigate()
  return (
    <>
    <div>
      <h2> 404 page not found</h2>
      <img
        src={
          "https://indianmemetemplates.com/wp-content/uploads/Bhaisahab-kuch-jyada-nahi-ho-gaya-ye-matlab-kuch-bhi.jpg"
        }
        alt="Logo"
        className="error"
      />
      ;
    </div>
   <button onClick={()=>navigate(-1)}>GO BACK</button>
   {/* ek page piche jayega */}
    </>
  );
};

export default Error;
