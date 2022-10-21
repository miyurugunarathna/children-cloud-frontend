import apiInstance from "../apiInstance";

const getStaff = async (data = null) => {
  try {
    const response = await apiInstance.post(`api/employee/`, data);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getBabysitters = async () => {
  try {
    const response = await apiInstance.get(`api/babySitter/`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const staffRequest = {
  getStaff,
  getBabysitters,
};

export default staffRequest;
