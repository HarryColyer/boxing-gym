import NavIcon from "../icons/NavIcon";
import { useState } from "react";

import { Link } from "react-router-dom";
const Navigation = () => {
  const [navIconClicked, setNavIconIsClicked] = useState();
  return (
    <nav className="fixed top-0 left-0 w-full h-24 p-5 flex flex-row justify-between items-center lg:p-7">
      <div className="size-20 bg-orange-600 rounded-full shadow-md"></div>
      <NavIcon clicked={navIconClicked} setClicked={setNavIconIsClicked} />
      <div className="nav-link-wrapper">
        <Link className="nav-link">The Gym</Link>
        <Link className="nav-link">PT Bio's</Link>
        <Link className="nav-link">Schedules</Link>
        <Link className="nav-link">Memberships</Link>
        <Link className="nav-link">Club Photos</Link>
        <Link className="nav-link">FAQs</Link>
      </div>
    </nav>
  );
};

export default Navigation;
