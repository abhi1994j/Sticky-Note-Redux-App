import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {removeNote} from "../features/sticky note/NoteSlice"
import { useEffect } from "react";
const NoteList = () => {
  const noteList = useSelector((state) => state.noteList);
  const dispatch = useDispatch();

  function handleDelete(id){
    console.log(id);
    dispatch(removeNote(id));
  }
  useEffect(()=>{
    localStorage.setItem("noteList" , JSON.stringify(noteList))
  }, [noteList])
  return (
    <>
      <div className="p-4 w-full flex gap-4 flex-wrap">
        {noteList.map((ele) => {
          console.log(ele);
          return (
            <div key={ele.id} className="rounded-xl md:w-1/2 w-full md:max-w-xs overflow-hidden flex flex-col drop-shadow-2xl">
              <div className="flex gap-10 justify-between items-center p-2 bg-amber-200">
                <p className="text-sm">{`${ele.date} ~ ${ele.time}`}</p>
                <div className="flex gap-4">
                  <CiEdit className="hover:text-white text-lg" />
                  <MdDelete className="hover:text-white text-lg" onClick={()=>handleDelete(ele.id)}/>
                </div>
              </div>
              <p type="text" className="bg-white outline-0 border-0 break-words border-b border-b-gray-300 p-2">{ele.title}</p>
              
              <textarea
                name=""
                rows="5"
                className="bg-gray-100 py-4 px-2 font-bold outline-0 border-0 break-words"
                id=""
              >{ele.description}</textarea>
              <button className="bg-amber-200 text-center w-full text-sm font-bold py-2">Save Changes</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NoteList;
