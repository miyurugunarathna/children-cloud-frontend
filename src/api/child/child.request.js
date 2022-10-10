import apiInstance from "../apiInstance";

const saveChild = async (child) => {
  try {
    const response = await apiInstance.post(`/api/child/`, child);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const updateChild = async (child, childID) => {
  try {
    const response = await apiInstance.put(`/api/child/${childID}`, child);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const deleteChild = async (childID) => {
  try {
    const response = await apiInstance.delete(`/api/child/${childID}`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getChildsOfParent = async () => {
  try {
    const response = await apiInstance.get(`/api/child/`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getAllChilds = async () => {
  try {
    const response = await apiInstance.get(`/api/child/all/`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const childRequest = {
  saveChild,
  updateChild,
  deleteChild,
  getAllChilds,
  getChildsOfParent,
};

export default childRequest;
