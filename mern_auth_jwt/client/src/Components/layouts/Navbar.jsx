import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import LogOutBtn from "../LogOutBtn";

const Navbar = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div>
      <Link to="/">Home</Link>
      {loggedIn === false && (
        <>
          <Link to="/register">register</Link>
          <Link to="/login">login</Link>
        </>
      )}

      {loggedIn === true && (
        <>
          <Link to="/customers">customers</Link>
          <LogOutBtn/>
        </>
      )}
    </div>
  );
};

export default Navbar;
