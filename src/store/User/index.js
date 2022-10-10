import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: null,
    firstName: null,
    lastName: null,
    userName: null,
    email: null,
    role: null,
  },
  isLoggedIn: false,
};

const mapUserDetails = (data = {}) => ({
  user: {
    id: data?._id,
    firstName: data?.firstName,
    lastName: data?.lastName,
    userName: data?.userName,
    email: data?.email,
    role: data?.role,
  },
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      return {
        ...state,
        ...mapUserDetails(action.payload),
      };
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    resetUser(state) {
      return {
        ...state,
        ...initialState,
      };
    },
  },
});

export const { setUser, setIsLoggedIn, resetUser } = userSlice.actions;

export default userSlice.reducer;
