import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import childRequest from "../../api/Child/child.request";

export const getChildStore = createAsyncThunk(
  "child/getchilds",
  async (thunkAPI) => {
    try {
      const res = await childRequest.getChildsOfParent();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addChildStore = createAsyncThunk(
  "child/addChild",
  async (thunkAPI) => {
    try {
      const res = await childRequest.saveChild();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateChildStore = createAsyncThunk(
  "child/updateChild",
  async (thunkAPI) => {
    try {
      const res = await childRequest.updateChild();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteChildStore = createAsyncThunk(
  "child/deleteChild",
  async (thunkAPI) => {
    try {
      const res = await childRequest.deleteChild();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  child: [],
};

export const childSlice = createSlice({
  name: "child",
  initialState,
  extraReducers: {
    //  getAllEvents

    [getChildStore.fulfilled]: (state, action) => {
      state.child = action.payload;
    },

    [addChildStore.fulfilled]: (state, action) => {
      state.child.push(action.payload);
    },

    [updateChildStore.fulfilled]: (state, action) => {
      const { id, name, age, gender, dateOfBirth, image, school, hobby } =
        action.payload;
      const existingChild = state.find((child) => child.id === id);
      if (existingChild) {
        existingChild.name = name;
        existingChild.age = age;
        existingChild.gender = gender;
        existingChild.dateOfBirth = dateOfBirth;
        existingChild.image = image;
        existingChild.school = school;
        existingChild.hobby = hobby;
      }
    },

    [deleteChildStore.fulfilled]: (state, action) => {
      state.child = state.child.filter((child) => child.id !== action.payload);
    },
  },
});

const { reducer } = childSlice;
export default reducer;
