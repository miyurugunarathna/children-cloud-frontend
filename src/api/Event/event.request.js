import apiInstance from "../apiInstance";

const saveEvent = async (event) => {
  try {
    const response = await apiInstance.post(`/api/events/`, event);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const updateEvent = async (event, eventID) => {
  try {
    const response = await apiInstance.put(`/api/events/${eventID}`, event);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const deleteEvent = async (eventID) => {
  try {
    const response = await apiInstance.delete(`/api/events/${eventID}`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const getEvents = async () => {
  try {
    const response = await apiInstance.get(`/api/events/`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

const eventRequest = {
  saveEvent,
  updateEvent,
  deleteEvent,
  getEvents,
};

export default eventRequest;
