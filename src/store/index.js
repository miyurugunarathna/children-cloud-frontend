import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User";
import eventReducer from "./Event";
import childReducer from "./Child";

const store = configureStore({
  reducer: {
    user: userReducer,
    event: eventReducer,
    child: childReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
