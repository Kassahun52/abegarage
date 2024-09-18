// src/services/api.js
export const fetchOrders = async () => {
  const response = await fetch('/api/orders');
  return response.json();
};
