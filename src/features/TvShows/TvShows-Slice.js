import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: ""
}

const tvShowsSlice = createSlice({
    name: "tvShows",
    initialState,
    reducers: {
        // Tv Show Id
        getTvShowId(state){
            return {
                id: state
            }
        }
    }
})

export const {getTvShowId} = tvShowsSlice.actions;
export default tvShowsSlice.reducer;


