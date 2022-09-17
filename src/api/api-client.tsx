import { Product } from "../store/productsSlice";
import { PartialProductCreate } from "../screens/addProduct/AddProductContainer";
import { PartialProductEdit } from "../screens/editProduct/EditProductContainer";

export const BASE_API_URL = "http://localhost:3000";

const headers = {
  "Content-Type": "application/json",
};

interface GetProductsApiParams {
  products: Product[];
}

interface CreateProductApiParams {
  newProduct: PartialProductCreate;
}

interface EditProductApiParams {
  editedProduct: PartialProductEdit;
}

interface DeleteProductApiParams {
  productId: number;
}

export const getProductsApi = (params: GetProductsApiParams): Promise<Product> => {
  const options = {
    method: "GET",
    headers,
    body: JSON.stringify(params.products),
  };

  return fetch(`${BASE_API_URL}/products/`, options).then((response) => {
    return response.json();
  });
};

export const createProductApi = (params: CreateProductApiParams): Promise<Product> => {

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(params.newProduct),
  };

  return fetch(`${BASE_API_URL}/products/`, options).then((response) => {
    return response.json();
  });
};

export const editProductApi = (params: EditProductApiParams): Promise<Product> => {
  const options = {
    method: "PUT",
    headers,
    body: JSON.stringify(params.editedProduct),
  };

  return fetch(`${BASE_API_URL}/products/${params.editedProduct.id}`, options).then((response) => {
    return response.json();
  });
};

export const deleteProductApi = (params: DeleteProductApiParams) => {
  const options = {
    method: "DELETE",
    headers,
  };

  return fetch(`${BASE_API_URL}/products/${params.productId}`, options).then(
    (response) => {
      return response.json();
    }
  );
};
