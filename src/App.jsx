import AddNote from "./components/AddNote";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NoteList from "./components/NoteList";

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        <Header />
        <AddNote />
        <NoteList />
        <Footer />
      </div>
    </>
  );
}

export default App;
