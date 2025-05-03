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
      const newNote = {
        ...state.note,
        id: nanoid(),
        date: new Date().toLocaleDateString("en-IN"),
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      };
      state.noteList.push(newNote);
      localStorage.setItem("noteList", JSON.stringify(state.noteList));
      state.note = { id: nanoid(), title: "", description: "", date: "", time: "" };
    },
    removeNote: (state, action) => {
      state.noteList = state.noteList.filter((ele)=> ele.id != action.payload)
      localStorage.setItem("noteList", JSON.stringify(state.noteList));
    },
    updateNote: (state, action) => {
      const { id, description } = action.payload;
      const noteIndex = state.noteList.findIndex((note) => note.id === id);
      if (noteIndex !== -1) {
        state.noteList[noteIndex].description = description;
      }
      // localStorage.setItem("noteList", JSON.stringify(state.noteList));
    }
  },
});

export const {setInput , addNote , removeNote , updateNote} = NoteSlice.actions;

export default NoteSlice.reducer;
