import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counters/countersSlice";
import postsReducer from "../features/posts/postsSlice";

const store = configureStore({
    reducer: {
        counters: counterReducer,
        posts: postsReducer,
    },
});

export default store;
