import { FiMusic } from "react-icons/fi";
import { useMusic } from "../context/MusicContext";
import { FaRegClock } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

const SongItem = ({ song, user }) => {
  const { deleteSong } = useMusic();

  return (
    <li
      key={song.id}
      className="border border-gray-100 p-3 rounded-lg flex justify-between w-full items-start shadow hover:shadow-md transition"
    >
      <div className="flex gap-4">
        <div className="bg-blue-300 p-3 rounded">
          <FiMusic size={25} color="#fff" />
        </div>
        <div className="space-y-3">
          <div>
            <h1 className="font-semibold text-lg">{song.title}</h1>
            <p className="text-sm text-gray-600">{song.artist}</p>
          </div>
          <div>
            <p>{song.album}</p>
            <div className="flex gap-2">
              <p>{song.year}</p>
              <p className="flex gap-1 items-center">
                <FaRegClock size={13} />
                {song.duration}
              </p>
              <p className="bg-blue-300/20 py-1 px-2 rounded-3xl text-[12px] text-black">
                {song.genre}
              </p>
            </div>
          </div>
        </div>
      </div>
      {user.role === "admin" && (
        <button onClick={() => deleteSong(song.id)}>
          <RiDeleteBin6Line color="red" />
        </button>
      )}
    </li>
  );
};

export default SongItem;
