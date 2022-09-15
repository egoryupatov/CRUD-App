import { Link } from "react-router-dom";
import React from "react";
import { NavBarStyled, LogoStyled, NavLinkStyled } from "./Menu.styled";

export const Menu: React.FC = () => {
  return (
    <NavBarStyled>
      <LogoStyled>Store</LogoStyled>
      <NavLinkStyled>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-product">Add a Product</Link>
          </li>
        </ul>
      </NavLinkStyled>
    </NavBarStyled>
  );
};
