import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 py-5 border-b-2 shadow-md">
      <div className="flex-1">
        <a className="text-1xl md:text-2xl lg:text-3xl font-bold">
          Phone Shop
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-1xl font-semibold space-x-5 flex items-center justify-center lg:pr-10">
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-green-500 text-white underline rounded-md py-2 px-3"
                : ""
            }
          >
            <button>Home</button>
          </NavLink>
          <NavLink
            to={"/favorites"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-green-500 text-white underline rounded-md py-2 px-3"
                : ""
            }
          >
            <button>Favorites</button>
          </NavLink>
          <NavLink
            to={"/login"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-green-500 text-white underline rounded-md py-2 px-3"
                : ""
            }
          >
            <button>Log In</button>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
