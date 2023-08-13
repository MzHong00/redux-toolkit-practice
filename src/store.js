import { configureStore, createSlice } from "@reduxjs/toolkit"

const toDoSlice = createSlice({
    name: "toDos",
    initialState: {
        toDos: [],
    },
    reducers: {
        add: (state, action) => {
            state.toDos.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => {
            state.toDos = state.toDos.filter(toDo => toDo.id !== action.payload)
        }
    }   
})

const store = configureStore({
    reducer: toDoSlice.reducer,
});

export const { add, remove } = toDoSlice.actions;

export default store;