import React, {useContext} from "react";
import logo from "../images/logo.png";
import { useLocation, Link } from "react-router-dom";
import styleContext from "../context/styleContext";
function Navbar() {
  const context = useContext(styleContext);
  const { yellowStyle } = context;
  let location = useLocation();
  const { pathname } = location;
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark text-center "
        style={{ backgroundColor: "#171717" }}
      >
        <div className="container">
          <Link className="navbar-brand mx-5" to="/">
            <img src={logo} alt="primeval-logo" style={{ height: "30px" }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 my-2"
                  style={pathname === "/keyboards" ? yellowStyle : null}
                  aria-current="page"
                  to="/keyboards"
                >
                  Keyboards
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3  my-2"
                  to="/mouse"
                  style={pathname === "/mouse" ? yellowStyle : null}
                >
                  Mouse
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 my-2"
                  to="/headphones"
                  style={pathname === "/headphones" ? yellowStyle : null}
                >
                  Headphones
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-4 my-2"
                  to="/pc"
                  style={pathname === "/pc" ? yellowStyle : null}
                >
                  PC
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 my-2"
                  to="/gamingconsole"
                  style={pathname === "/gamingconsole" ? yellowStyle : null}
                >
                  Gaming Console
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 my-2"
                  to="/accessories"
                  style={pathname === "/accessories" ? yellowStyle : null}
                >
                  Accessories
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 my-2"
                  to="/gears"
                  style={pathname === "/gears" ? yellowStyle : null}
                >
                  Gears
                </Link>
              </li>

              <li className="nav-item my-2 mx-3 ">
                <Link
                  className="nav-link "
                  to="/search"
                  style={pathname === "/search" ? yellowStyle : null}
                >
                  <i className="fas fa-search"></i>
                </Link>
              </li>
              <li className="nav-item my-2 mx-3 ">
                <Link
                  className="nav-link "
                  to="/cart"
                  style={pathname === "/cart" ? yellowStyle : null}
                >
                  <i className="fas fa-shopping-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
