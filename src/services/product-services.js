import collectionClient from "./collection-client";
import { productsKey } from "../config";

// export async function getProducts() {
//   return await collectionClient(`/products`);
// }

export async function getProducts() {
  const { ...products } = await collectionClient(`/products`);

  console.log("inside get products function CHENNIE 0001", Object.values(products));

  sessionStorage.setItem(productsKey, JSON.stringify(Object.values(products)));
  return Object.values(products);
}


export async function createProduct(newProductData) {
  return await collectionClient("/products", {
    body: newProductData,
  });
}

export async function updateProduct(newData,productId) {
  const { token, id ,...user } = await collectionClient(`/products/${productId}`, {
    body: newData,
    method: "PATCH",
  });

  return user;
}

export async function removeProduct(id) {
  return await collectionClient(`/products/${id}`, {
    method: "DELETE",
  });
}
