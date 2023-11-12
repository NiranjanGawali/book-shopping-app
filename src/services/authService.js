export const login = async (authDetail) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(authDetail),
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/login`,
    requestOptions
  );
  if (!response.ok) {
    const error = new Error(
      `Request failed with status: ${response.status}. Message: ${response.statusText}`
    );
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  if (data.accessToken) {
    sessionStorage.setItem('token', JSON.stringify(data.accessToken));
    sessionStorage.setItem('cbid', JSON.stringify(data.user.id));
  }
  return data;
};

export const register = async (authDetail) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(authDetail),
  };
  const response = await fetch(
    `${process.env.REACT_APP_HOST}/register`,
    requestOptions
  );
  if (!response.ok) {
    // throw { message: response.statusText, status: response.status };
    const error = new Error(
      `Request failed with status: ${response.status}. Message: ${response.statusText}`
    );
    error.status = response.status;
    throw error;
  }
  const data = await response.json();
  if (data.accessToken) {
    sessionStorage.setItem('token', JSON.stringify(data.accessToken));
    sessionStorage.setItem('cbid', JSON.stringify(data.user.id));
  }
  return data;
};

export const logout = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('cbid');
};
