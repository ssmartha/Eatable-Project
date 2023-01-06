import collectionClient from "./collection-client";

export async function getProducts() {
  return await collectionClient(`/products`);
}

export async function getProduct(id) {
  return await collectionClient(`/products/${id}`);
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
