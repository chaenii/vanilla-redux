import { legacy_createStore as createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.unshift({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
  },
});

//확장프로그램 사용하면 redux상태를 브라우저에서 학인할 수 있음(Redux Developer Tools, toolkit사용할 필요 없음)
const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
