import { configureStore } from "@reduxjs/toolkit";
import { songReducer } from "./reducers/songReducer.js";

export const store = configureStore({
    reducer: {
        songs: songReducer.reducer,
    },

});
