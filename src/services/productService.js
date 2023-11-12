export const getProducts = async (searchTerm) => {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/products?q=${
      searchTerm ? searchTerm : ''
    }`
  );
  if (!response.ok) {
    const error = new Error(
      `Request failed with status: ${response.status}. Message: ${response.statusText}`
    );
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  return data;
};

export const getProductDetailsById = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/products/${id}`
  );
  if (!response.ok) {
    const error = new Error(
      `Request failed with status: ${response.status}. Message: ${response.statusText}`
    );
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  return data;
};

export const getFeaturedProductList = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/444/featured_products`
  );
  if (!response.ok) {
    const error = new Error(
      `Request failed with status: ${response.status}. Message: ${response.statusText}`
    );
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  return data;
};
