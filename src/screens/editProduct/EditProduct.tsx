import React from "react";
import { Input } from "../../kit/Input";
import { ButtonStyled } from "../../styles/Button.styled";
import { Form } from "../../styles/Form.styled";
import {
  InnerContainerStyled,
  WrapperStyled,
} from "../homePage/HomePage.styled";

interface EditProductProps {
  label: string;
  productName: string;
  productPrice: string;
  productStock: string;
  heading?: string;
  onProductNameChange: (value: string) => void;
  onProductPriceChange: (value: string) => void;
  onProductStockChange: (value: string) => void;
  onSubmit: () => void;
}

export const EditProduct: React.FC<EditProductProps> = (props) => {
  return (
    <WrapperStyled>
      <InnerContainerStyled>
        <Form>
          <h1>You're editing the product - {props.heading}</h1>
          <Input
            label={"Change the product name"}
            value={props.productName}
            onChange={props.onProductNameChange}
            placeholder={"Enter the new product name"}
          />
          <Input
            label={"Change the product price"}
            value={props.productPrice}
            onChange={props.onProductPriceChange}
            placeholder={"Enter the new price"}
          />
          <Input
            label={"Change the number in stock"}
            value={props.productStock}
            onChange={props.onProductStockChange}
            placeholder={"Enter the new number in stock"}
          />

          <ButtonStyled onClick={props.onSubmit}>
            Submit your edits
          </ButtonStyled>
        </Form>
      </InnerContainerStyled>
    </WrapperStyled>
  );
};
