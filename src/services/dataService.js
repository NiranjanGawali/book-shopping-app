const getSession = async () => {
  const token = JSON.parse(sessionStorage.getItem('token'));
  const cbid = JSON.parse(sessionStorage.getItem('cbid'));
  return { token, cbid };
};

export const getUser = async () => {
  const browserData = await getSession();
  const requestOption = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${browserData.token}`,
    },
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/600/users/${browserData.cbid}`,
    requestOption
  );
  if (!response.ok) {
    const error = new Error(
      `Request failed with status: ${response.status}. Message: ${response.statusText}`
    );
    error.status = response.status;
    throw error;
  }
  const userData = await response.json();
  return userData;
};

export const getUserOrders = async () => {
  const browserData = await getSession();
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.cbid}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${browserData.token}`,
      },
    }
  );
  if (!response.ok) {
    const error = new Error(
      `Request failed with status: ${response.status}. Message: ${response.statusText}`
    );
    error.status = response.status;
    throw error;
  }
  const orderData = await response.json();
  return orderData;
};

export const createOrder = async (cartList, total, user) => {
  const browserData = await getSession();
  const order = {
    cartList: cartList,
    amount_paid: total,
    quantity: cartList.length,
    user: {
      name: user.name,
      email: user.email,
      id: user.id,
    },
  };
  const requestOption = {
    method: 'POST',
    body: JSON.stringify(order),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${browserData.token}`,
    },
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/660/orders`,
    requestOption
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
