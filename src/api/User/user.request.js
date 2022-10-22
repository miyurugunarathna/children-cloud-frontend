import apiInstance from "../apiInstance";

const addUser = async (user) => {
  try {
    const response = await apiInstance.post(`api/user/`, user);
    return response.data;
  } catch (err) {
    return err.response;
  }
};
const getAllUsers = async () => {
  try {
    const response = await apiInstance.get(`api/user/`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};
const updateUser = async (user, userID) => {
  try {
    const response = await apiInstance.put(`api/user/${userID}`, user);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const login = async (loginCredentials) => {
  try {
    const response = await apiInstance.post(
      `api/user/login/`,
      loginCredentials,
    );
    if (response.data.data.token) {
      localStorage.setItem("token", JSON.stringify(response.data.data.token));
    }
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/";
};

const authHeader = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    return { Authorization: token };
  }
  return {};
};

const viewProfile = async () => {
  try {
    const response = await apiInstance.get(`api/user/me`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getOneUser = async (userID) => {
  try {
    const response = await apiInstance.post(`api/user/${userID}`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const deleteUser = async (userID) => {
  try {
    const response = await apiInstance.delete(`api/user/${userID}`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const userRequest = {
  getAllUsers,
  getOneUser,
  addUser,
  login,
  logout,
  authHeader,
  viewProfile,
  updateUser,
  deleteUser,
};

export default userRequest;
