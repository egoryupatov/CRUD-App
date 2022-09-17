import styled from "styled-components";

interface ButtonStyledProps {
    bg?: string;
    margin?:string;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`

  background-color: #FAFBFC;
  margin: ${({ margin }) => margin || ""};
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  appearance: none;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  color: #24292E;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  white-space: nowrap;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  
}

&:hover {
    background-color: #F3F4F6;
    text-decoration: none;
    transition-duration: 0.1s;
  }


`;