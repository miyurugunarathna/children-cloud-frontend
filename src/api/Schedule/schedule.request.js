import apiInstance from "../apiInstance";

const saveSchedule = async (schedule) => {
  try {
    const response = await apiInstance.post(`/api/schedule/`, schedule);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const updateSchedule = async (schedule, childID) => {
  try {
    const response = await apiInstance.put(
      `/api/schedule/${childID}`,
      schedule,
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const deleteSchedule = async (childID) => {
  try {
    const response = await apiInstance.delete(`/api/schedule/${childID}`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getSchedules = async (childID) => {
  try {
    const response = await apiInstance.get(`/api/schedule/${childID}`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const scheduleRequest = {
  saveSchedule,
  updateSchedule,
  deleteSchedule,
  getSchedules,
};

export default scheduleRequest;
