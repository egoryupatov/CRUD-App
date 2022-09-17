import { DeleteProduct } from "../deleteProduct/DeleteProduct";
import { EditProductButton } from "./EditProductButton";
import { Product } from "../../store/productsSlice";
import React, { ChangeEventHandler } from "react";
import {
  TableBodyStyled,
  TableCellStyled,
  TableRowStyled,
} from "./HomePage.styled";

interface SortedListProps {
  products: Product[];
  searchValue: string;
  onChangeSearchValue: ChangeEventHandler<any>;
}

export const SortedList: React.FC<SortedListProps> = (props) => {
  return (
    <TableBodyStyled>
      <TableRowStyled>
        <TableCellStyled>#</TableCellStyled>
        <TableCellStyled>Product name</TableCellStyled>
        <TableCellStyled>Price</TableCellStyled>
        <TableCellStyled>Stock</TableCellStyled>
        <TableCellStyled></TableCellStyled>
        <TableCellStyled></TableCellStyled>
      </TableRowStyled>

      {props.products
        .filter((product) => {
          return product.name.includes(props.searchValue);
        })
        .map((product) => (
          <TableRowStyled key={product.id}>
            <TableCellStyled>{product.id}</TableCellStyled>
            <TableCellStyled>{product.name}</TableCellStyled>
            <TableCellStyled>${product.price}</TableCellStyled>
            <TableCellStyled>{product.stock}</TableCellStyled>
            <TableCellStyled>
              <DeleteProduct productId={product.id} />
            </TableCellStyled>
            <TableCellStyled>
              <EditProductButton productId={product.id} />
            </TableCellStyled>
          </TableRowStyled>
        ))}
    </TableBodyStyled>
  );
};
