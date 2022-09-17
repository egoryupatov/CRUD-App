import { editProductAction, Product } from "../../store/productsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import React, { useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { EditProduct } from "./EditProduct";
import {createProductApi, editProductApi} from "../../api/api-client";

export type PartialProductEdit = Pick<Product, "name" | "price" | "stock" | "id" >;

export const EditProductContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const products = useAppSelector((state) => state.products.list);
  const editedProduct: Product | undefined = products.find((product) => product.id === Number(params.id));

  console.log(editedProduct)

  const [productInfo, setProductInfo] = useState<PartialProductEdit>({
    name: '',
    price: '',
    stock: '',
    id: Number(params.id)
  });

  const handleProductNameEdit = (name: string) => {
    setProductInfo({ ...productInfo, name });
  };

  const handleProductPriceEdit = (price: string) => {
    setProductInfo({ ...productInfo, price });
  };

  const handleProductStockEdit = (stock: string) => {
    setProductInfo({ ...productInfo, stock });
  };

  const handleProductEdit = () => {
    editProductApi({ editedProduct: productInfo }).then((productInfo) => {
      dispatch(editProductAction(productInfo));
    });
    navigate("/")
  };

  return (
    <EditProduct
      label={""}
      productName={productInfo.name}
      productPrice={productInfo.price}
      productStock={productInfo.stock}
      heading={editedProduct?.name}
      onProductNameChange={handleProductNameEdit}
      onProductPriceChange={handleProductPriceEdit}
      onProductStockChange={handleProductStockEdit}
      onSubmit={handleProductEdit}
    />
  );
};
