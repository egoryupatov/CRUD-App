import React from "react";
import { Input } from "../../kit/Input";
import { ButtonStyled } from "../../styles/Button.styled";
import { Form } from "../../styles/Form.styled";
import {WrapperStyled} from "../homePage/HomePage.styled";
import {InnerContainerStyled} from "../homePage/HomePage.styled";


interface AddProductProps {
  label: string;
  productName: string;
  productPrice: string;
  productStock: string;
  onProductNameChange: (value: string) => void;
  onProductPriceChange: (value: string) => void;
  onProductStockChange: (value: string) => void;
  onSubmit: () => void;
}

export const AddProduct: React.FC<AddProductProps> = (props) => {
  return (
    <WrapperStyled>
      <InnerContainerStyled>

        <Form>
          <h1>Want to add a new product?</h1>
          <Input
            label={"Enter the product name"}
            value={props.productName}
            onChange={props.onProductNameChange}
            placeholder={"Product name"}
          />
          <Input
            label={"Enter the product price"}
            value={props.productPrice}
            onChange={props.onProductPriceChange}
            placeholder={"Product price"}
          />
          <Input
            label={"Enter the number in stock"}
            value={props.productStock}
            onChange={props.onProductStockChange}
            placeholder={"Number in stock"}
          />

          <ButtonStyled onClick={props.onSubmit}>Add a product</ButtonStyled>
        </Form>
      </InnerContainerStyled>
    </WrapperStyled>
  );
};
