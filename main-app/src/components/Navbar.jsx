import { MdOutlineLogin } from "react-icons/md";
import { FiMusic } from "react-icons/fi";

const Navbar = ({ caption, logout }) => {
  return (
    <header className="flex flex-col justify-center items-center bg-gray-200 p-3">
      <nav className="w-full max-w-7xl flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="bg-blue-300 p-3 rounded">
            <FiMusic size={25} color="#fff" />
          </div>
          <h2 className="text-xl font-semibold">MusicApp</h2>
        </div>
        <div className="flex gap-4 items-center">
          <p>{caption}</p>
          <div className="">
            <button
              className="flex items-center gap-1 rounded border py-1 px-2"
              onClick={logout}
            >
              <MdOutlineLogin />
              Logout
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
