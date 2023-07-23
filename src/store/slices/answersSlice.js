import {createSlice} from "@reduxjs/toolkit";
import {reset} from "../store";

const answersSlice = createSlice({
    name: "answer",
    initialState: {
        answers: {}
    },
    reducers: {
        addAnswer(state, action) {
            console.log(state,action);
            const kanji = action.payload.kanji;
            // state.push(action.payload);
            if (!state.answers[kanji]) {
                state.answers[kanji] = []
            }
            state.answers[kanji].push({
            ...action.payload
            })

            // state.object = action.payload;
        },
        removeAnswer(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return { answers: {}};
        })
    }
});


export const {addAnswer,removeAnswer} = answersSlice.actions;
export const answerReducer = answersSlice.reducer;