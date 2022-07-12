import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./features/postSlice";

const Store = configureStore({
  reducer: {
    app: PostReducer,
  },
});
export default Store;
