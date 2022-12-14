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

const getAllStaffs = async () => {
  try {
    const response = await apiInstance.get(`/api/child/allStaff/`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getSingleChild = async (childID) => {
  try {
    const response = await apiInstance.get(`/api/child/${childID}`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const AssignStaffforChild = async (data) => {
  try {
    const response = await apiInstance.post(`/api/assign/`, data);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getAllAssignStaffforChild = async () => {
  try {
    const response = await apiInstance.get(`/api/assign/`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getAssignedKidsForStaff = async () => {
  try {
    const response = await apiInstance.get(`/api/assign/kids`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const updateAssignedStaff = async (staff, ID) => {
  try {
    const response = await apiInstance.put(`/api/assign/${ID}`, staff);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const deleteAssignStaff = async (childID) => {
  try {
    const response = await apiInstance.delete(`/api/assign/${childID}`);
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
  getAllStaffs,
  getSingleChild,
  AssignStaffforChild,
  getAssignedKidsForStaff,
  getAllAssignStaffforChild,
  updateAssignedStaff,
  deleteAssignStaff,
};

export default childRequest;
