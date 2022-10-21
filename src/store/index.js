import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User";
import eventReducer from "./Event";
import childReducer from "./Child";
import staffReducer from "./Staff";

const store = configureStore({
  reducer: {
    user: userReducer,
    event: eventReducer,
    child: childReducer,
    staff: staffReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
