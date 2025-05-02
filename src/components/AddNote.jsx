import { useDispatch, useSelector } from "react-redux";
import { addNote, setInput } from "../features/sticky note/NoteSlice";
import {  useState } from "react";

const AddNote = () => {
  const [flag, setFlag] = useState(false);
  const note = useSelector((state) => state.note);
  const noteList = useSelector((state) => state.noteList);
  const dispatch = useDispatch();

  //  To set the input in the input fields
  function handleChange(e) {
    const { name, value } = e.target;
    dispatch(setInput({ ...note, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.title) {
      setFlag(true);
    } else {
      dispatch(addNote(note));
      setFlag(false)
    }
  };
  console.log(noteList);

 

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center  md:p-10 p-5">
        {flag && (
          <p className="text-red-300 text-sm text-center">Title is required</p>
        )}
        <div className="bg-white w-full relative md:max-w-lg shadow-lg p-4 rounded-lg flex flex-col">
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            className="border-0 outline-0 placeholder:text-gray-400 text-gray-500 text-sm md:text-[16px] mb-4"
            placeholder="Title"
            maxLength="50"
          />
          <textarea
            placeholder="Write your Note here!"
            className="mb-2 border-0 text-gray-500 outline-0 text-sm md:text-[16px]"
            name="description"
            value={note.description}
            rows="5"
            onChange={handleChange}
            id=""
          ></textarea>
          <button
            type="submit"
            className="rounded-full flex justify-center text-white hover:scale-120 hover:text-black items-center bg-amber-200 px-2 text-4xl absolute -bottom-4 right-8 md:right-10"
            onClick={handleSubmit}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
