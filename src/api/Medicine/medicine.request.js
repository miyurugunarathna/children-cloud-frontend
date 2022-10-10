import apiInstance from "../apiInstance";

const saveMedicine = async (medicine) => {
  try {
    const response = await apiInstance.post(`/api/medicine/`, medicine);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const updateMedicine = async (medicine, childID) => {
  try {
    const response = await apiInstance.put(
      `/api/medicine/${childID}`,
      medicine,
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const deleteMedicine = async (childID) => {
  try {
    const response = await apiInstance.delete(`/api/medicine/${childID}`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getMedicines = async (childID) => {
  try {
    const response = await apiInstance.get(`/api/medicine/${childID}`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const medicineRequest = {
  saveMedicine,
  updateMedicine,
  deleteMedicine,
  getMedicines,
};

export default medicineRequest;
