import { NavLink } from "react-router-dom";
import "../styles/StyledNavbar.scss";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            Van Tran
          </NavLink>

          <ul className={"nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-links active" : "nav-links"
                }
              >
                <i className={"button"}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Home
                </i>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-links active" : "nav-links"
                }
              >
                <i className={"button"}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Contact
                </i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "nav-links active" : "nav-links"
                }
              >
                <i className={"button"}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Projects
                </i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  isActive ? "nav-links active" : "nav-links"
                }
              >
                <i className={"button"}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Resume
                </i>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
