import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  removeNote,
  setInput,
  updateNote,
} from "../features/sticky note/NoteSlice";
import { useEffect, useState } from "react";
const NoteList = () => {
  const [flag, setFlag] = useState(false);
  const [update ,isUpdate] = useState(false)
   const [description, setDescription] = useState("");
  const [iseditId, setIsEditId] = useState(null);

  const noteList = useSelector((state) => state.noteList);
  const note = useSelector((state) => state.note);

  const dispatch = useDispatch();

  function handleDelete(id) {
    console.log(id);
    dispatch(removeNote(id));
  }

  function handleEdit(id) {
    setIsEditId(id);
    const selectedNote = noteList.find((ele) => ele.id === id);
    dispatch(setInput({ ...selectedNote }));
    setDescription(note.description);
    setFlag(!flag);
  }

  function handleUpdate(id) {
    dispatch(updateNote({id:id , description:description}));
    isUpdate(true)
  }

  useEffect(() => {
    localStorage.setItem("noteList", JSON.stringify(noteList));
  }, [noteList]);

  return (
    <>
      <div className="p-4 w-full min-h-[50vh] flex gap-4 flex-wrap">
        {noteList.map((ele) => {
          console.log(ele);
          return (
            <div
              key={ele.id}
              className="rounded-xl md:w-1/2 w-full md:max-w-xs overflow-hidden flex flex-col drop-shadow-2xl"
            >
              <div className="flex gap-10 justify-between items-center p-2 bg-amber-200">
                <p className="text-sm">{`${ele.date} ~ ${ele.time}`}</p>
                <div className="flex gap-4">
                  <CiEdit
                    className="hover:text-white text-lg"
                    onClick={() => handleEdit(ele.id)}
                  />
                  <MdDelete
                    className="hover:text-white text-lg"
                    onClick={() => handleDelete(ele.id)}
                  />
                </div>
              </div>
              <p
                type="text"
                className="bg-white outline-0 border-0 break-words border-b border-b-gray-300 p-2"
              >
                {ele.title}
              </p>

              <textarea
                rows={`${flag && iseditId === ele.id ? "5" : "3"}`}
                className={`bg-gray-100  px-2 font-bold outline-0 border-0 break-words`}
                id=""
                name="description"
                value={flag && iseditId === ele.id ? description : ele.description}
                disabled={flag && iseditId !== ele.id ? true : false}
                onChange={(e) => setDescription(e.target.name = e.target.value)}
              >
                {ele.description}
              </textarea>
              {flag && iseditId === ele.id ? (
                <button
                  className="bg-amber-200 text-center w-full text-sm font-bold py-2"
                  onClick={() => handleUpdate(ele.id)}
                >
                  Save Changes
                </button>
              ): ""}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NoteList;
