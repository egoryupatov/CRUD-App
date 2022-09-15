import styled from "styled-components";

export const NavBarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #36304A;
  height:5vh;
  align-items: center;
  box-shadow: 0 1px 8px #ddd;
  
  a {
    color: white;
    text-decoration: none;
  }
`

export const NavLinkStyled = styled.div`

  display: flex;
  text-decoration: none;
  padding-right:40px;
  
  li {
    padding: 0 20px;
    list-style: none;
    display: inline-block;
  }
`

export const LogoStyled = styled.div`
  padding-left:40px;
  display: flex;
  font-size:25px;
  color:white;
  font-weight: bold;

`