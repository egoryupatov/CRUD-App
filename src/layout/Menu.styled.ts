import styled from "styled-components";

export const NavBarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #36304A;
  align-items: center;
  
  a {
    color: white;
    text-decoration: none;
  }
`

export const NavLinkStyled = styled.div`

  display: flex;
  text-decoration: none;
  padding: 15px 40px 15px 0px;
  
  
  li {
    padding: 0 20px;
    list-style: none;
    display: inline-block;
  }
`

export const LogoStyled = styled.div`
  padding: 15px 0px 15px 40px;
  display: flex;
  font-size:25px;
  color:white;
  font-weight: bold;

`