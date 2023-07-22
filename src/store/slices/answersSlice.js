import {createSlice} from "@reduxjs/toolkit";
import {reset} from "../store";

const answersSlice = createSlice({
    name: "answer",
    initialState: [],
    reducers: {
        addAnswer(state, action) {
            state.push(action.payload);
        },
        removeAnswer(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return [];
        })
    }
});


export const {addAnswer,removeAnswer} = answersSlice.actions;
export const answerReducer = answersSlice.reducer;