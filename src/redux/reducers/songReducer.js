import { createSlice } from "@reduxjs/toolkit";

export const songReducer = createSlice({
    name: "songs",
    initialState: [
        {
            id: 1,
            name: "testsong",
            artist: "Testartist",
            genre: "testgenre",
            rating: 5,
        },
        {
            id: 2,
            name: "testsong2",
            artist: "Testartist2",
            genre: "testgenre2",
            rating: 4,
        }
    ],
    reducers: {
        add: (state, action) => {
            action.payload.id = state.length + 1;
            state.push(action.payload);
        },
        remove: (state, action) => {
            return state.filter(song => song.id !== action.payload)
        }
    }
})

export const { add, remove } = songReducer.actions
export default songReducer.reducer;