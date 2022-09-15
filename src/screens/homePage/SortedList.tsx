import { DeleteProduct } from "../deleteProduct/DeleteProduct";
import { EditProductButton } from "./EditProductButton";
import { Product } from "../../store/productsSlice";
import React, { ChangeEventHandler } from "react";

interface SortedListProps {
  products: Product[];
  searchValue: string;
  onChangeSearchValue: ChangeEventHandler<any>;
}

export const SortedList: React.FC<SortedListProps> = (props) => {
  return (
    <tbody>
      {props.products
        .filter((product) => {
          return product.name.includes(props.searchValue);
        })
        .map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.stock}</td>
            <td>
              <DeleteProduct productId={product.id} />
            </td>
            <td>
              <EditProductButton productId={product.id} />
            </td>
          </tr>
        ))}
    </tbody>
  );
};
