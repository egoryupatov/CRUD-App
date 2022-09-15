import { Link } from "react-router-dom";
import React from "react";
import {ButtonStyled} from "../../styles/Button.styled";

interface EditProductProps {
  productId: number;
}

export const EditProductButton: React.FC<EditProductProps> = (props) => {
  return (
    <td>
      <Link to={`/edit/${props.productId}`}>
        <ButtonStyled bg={"green"}>Edit</ButtonStyled>
      </Link>
    </td>
  );
};
