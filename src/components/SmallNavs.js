import React from "react";

import { Link, useLocation } from "react-router-dom";
function SmallNavs(props) {
  const { image1, image2, image3, title1, title2, title3, title4, path } =
    props;
  const location = useLocation();
  const { pathname } = location;
  const active = {
    borderBottom: "1px solid yellow",
  };
  return (
    <div>
      <div className="keyboard-navs">
        <ul className="nav justify-content-center">
          <li className="nav-item mx-5">
            <Link
              className="nav-link text-center"
              to={`${path}/${title1}`}
              style={pathname === `${path}/${title1}` ? active : null}
            >
              <img src={image1} alt="" height="25px" /> <br />
              <span style={{ color: "grey" }}>
                {" "}
                <strong>{title1}</strong>{" "}
              </span>
            </Link>
          </li>
          <li className="nav-item mx-5">
            <Link
              className="nav-link text-center"
              to={`${path}/${title2}`}
              style={pathname === `${path}/${title2}` ? active : null}
            >
              <img src={image2} alt="" height="25px" />
              <br />
              <span style={{ color: "grey" }}>
                {" "}
                <strong>{title2}</strong>{" "}
              </span>
            </Link>
          </li>
          <li className="nav-item mx-5">
            <Link
              className="nav-link text-center"
              to={`${path}/${title4}`}
              style={pathname === `${path}/${title4}` ? active : null}
            >
              <img src={image3} alt="" height="25px" />
              <br />
              <span style={{ color: "grey" }}>
                {" "}
                <strong>{title3}</strong>{" "}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SmallNavs;
