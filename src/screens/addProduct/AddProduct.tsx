import React from "react";
import { Input } from "../../kit/Input";
import { Container } from "../../styles/Container.styled";
import { ButtonStyled } from "../../styles/Button.styled";
import { Form } from "../../styles/Form.styled";
import { Wrapper } from "../../styles/Wrapper.styled";

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
    <Container>

      <Wrapper width={"30%"}>
        <h1>Want to add a new product?</h1>
        <Form>
          <Input
            label={"Enter the product name"}
            value={props.productName}
            onChange={props.onProductNameChange}
          />
          <Input
            label={"Enter the product price"}
            value={props.productPrice}
            onChange={props.onProductPriceChange}
          />
          <Input
            label={"Enter the number in stock"}
            value={props.productStock}
            onChange={props.onProductStockChange}
          />

          <ButtonStyled onClick={props.onSubmit}>Add a product</ButtonStyled>

        </Form>
      </Wrapper>
    </Container>
  );
};
