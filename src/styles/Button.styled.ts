import styled from "styled-components";

interface ButtonStyledProps {
    bg?: string;
    margin?:string;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  
  color: #fff!important;
  background-color: ${({bg}) => bg || '#36304a'};
  margin: ${({margin}) => margin || ''};
  padding: 10px 15px;
  border:none;
  border-radius: 5px;
  font-weight: bold;
  min-width:7vh;
`