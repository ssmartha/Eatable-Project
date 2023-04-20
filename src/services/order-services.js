import collectionClient from "./collection-client";

export async function addNewOrder(newOrder) {
  return await collectionClient("/orders", {
    body: newOrder,
  });
}

export async function getOrders() {
  return await collectionClient(`/orders`);
}
