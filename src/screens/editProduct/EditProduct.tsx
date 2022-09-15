import React from "react";
import { Input } from "../../kit/Input";
import {Container} from "../../styles/Container.styled";
import {ButtonStyled} from "../../styles/Button.styled";
import {Wrapper} from "../../styles/Wrapper.styled";
import {Form} from "../../styles/Form.styled";

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
    <Container>
      <Wrapper width={"30%"}>
      <h1>You're editing the product - "{props.heading}"</h1>
      <Form>
        <Input
          label={"Change the product name"}
          value={props.productName}
          onChange={props.onProductNameChange}
        />
        <Input
          label={"Change the product price"}
          value={props.productPrice}
          onChange={props.onProductPriceChange}
        />
        <Input
          label={"Change the number in stock"}
          value={props.productStock}
          onChange={props.onProductStockChange}
        />

        <ButtonStyled onClick={props.onSubmit}>
          Submit your edits
        </ButtonStyled>
      </Form>
      </Wrapper>
    </Container>
  );
};
