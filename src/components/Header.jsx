import { NavLink } from "react-router-dom";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      color: isActive ? "red" : "white",
      fontSize: "25px"
    };
  };
  return (
    <div className="header">
      <NavLink style={navLinkStyles} to={"/"}>
        <h1>Home</h1>
      </NavLink>
      <NavLink style={navLinkStyles} to={"/about"}>
        <h1>About </h1>
      </NavLink>
      <NavLink style={navLinkStyles}  to={"/contact"}>
        <h1>Contact </h1>
      </NavLink>
    </div>
  );
};

export default Header;
