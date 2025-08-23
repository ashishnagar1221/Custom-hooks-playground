import { NavLink } from "react-router-dom";

const Navbar = () => {
  const LINKS = [
    { to: "/", label: "Home" },
    { to: "/fetch", label: "Data Fetch" },
    { to: "auth", label: "Auth" },
    { to: "/form", label: "Form" },
    { to: "/ws", label: "Web Socket" },
    { to: "/debounce", label: "Debounce" },
    { to: "/throttle", label: "Throttle" },
    { to: "/online-status", label: "Online Status" },
  ];
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="flex item-center gap-3">
        <img src="src\assets\react.svg" alt="logo" className="w-8 h-8" />
        <div className="text-lg font-bold">Hooks Playground</div>
      </div>
      <div className="">
        {LINKS.map((ele) => (
          <NavLink
            key={ele.to}
            to={ele.to}
            end={ele.to === "/"}
            className={({ isActive }) => `px-2 py-2 rounded`}
          >
            {ele.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
