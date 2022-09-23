import { configureStore } from "@reduxjs/toolkit";
import tvShowsReducer from "../features/TvShows/TvShows-Slice";

export const store = configureStore({
    reducer: {
        tvShows: tvShowsReducer
    }
})
