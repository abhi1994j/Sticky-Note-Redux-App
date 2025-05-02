import logo from "../assets/logo.png"
export default function Header() {
  return <>
      <header className="p-2 w-full bg-amber-200 drop-shadow-xl">
              <div className="m-2 w-full">
                    <div className="md:w-[150px] w-[120px] flex items-center gap-2">
                        <img className="w-[20%] drop-shadow-xl object-cover block cursor-pointer" src={logo} alt="logo" /><span className="md:text-lg text-sm drop-shadow-xl cursor-pointer">Keeper-App</span>
                    </div>
              </div>
      </header>
  </>;
}



