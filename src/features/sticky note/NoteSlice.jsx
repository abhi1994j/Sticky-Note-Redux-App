import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  note: { id: nanoid(), title: "", description: "" , date :new Date().toLocaleDateString("en-In"),  time:`${new Date().getHours()}:${new Date().getMinutes()}`},
  noteList: localStorage.getItem("noteList") ? JSON.parse(localStorage.getItem("noteList")) : []
};

export const NoteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.note = action.payload
    },
    addNote: (state) => {
      state.noteList.push(state.note)
    },
    removeNote: (state, action) => {
      state.noteList = state.noteList.filter((ele)=> ele.id != action.payload)
    },
  },
});

export const {setInput , addNote , removeNote} = NoteSlice.actions;

export default NoteSlice.reducer;
