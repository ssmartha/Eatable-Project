import collectionClient from "./collection-client";

export async function addNewOrderToCart(newOrder) {
  return await collectionClient("/orders", {
    body: newOrder,
  });
}

export async function getCartProducts() {
  return await collectionClient(`/orders`);
}
