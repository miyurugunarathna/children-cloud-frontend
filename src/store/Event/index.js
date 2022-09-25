import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import eventRequest from "../../api/Event/event.request";

export const getEventStore = createAsyncThunk(
  "event/getEvents",
  async (thunkAPI) => {
    try {
      const res = await eventRequest.getEvents();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addEventStore = createAsyncThunk(
  "event/addEvents",
  async (thunkAPI) => {
    try {
      const res = await eventRequest.saveEvent();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateEventStore = createAsyncThunk(
  "event/updateEvents",
  async (thunkAPI) => {
    try {
      const res = await eventRequest.updateEvent();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteEventStore = createAsyncThunk(
  "event/deleteEvents",
  async (thunkAPI) => {
    try {
      const res = await eventRequest.deleteEvent();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  event: [],
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  extraReducers: {
    //  getAllEvents

    [getEventStore.fulfilled]: (state, action) => {
      state.event = action.payload;
    },

    [addEventStore.fulfilled]: (state, action) => {
      state.event.push(action.payload);
    },

    [updateEventStore.fulfilled]: (state, action) => {
      const { id, title, description, date, startTime, endTime, tag, image } =
        action.payload;
      const existingEvent = state.find((event) => event.id === id);
      if (existingEvent) {
        existingEvent.title = title;
        existingEvent.description = description;
        existingEvent.date = date;
        existingEvent.startTime = startTime;
        existingEvent.endTime = endTime;
        existingEvent.tag = tag;
        existingEvent.image = image;
      }
    },

    [deleteEventStore.fulfilled]: (state, action) => {
      state.event = state.event.filter((event) => event.id !== action.payload);
    },
  },
});

const { reducer } = eventSlice;
export default reducer;
