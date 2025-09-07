import { useMusic } from "../context/MusicContext";
import SongItem from "./SongItem";

const SongList = ({ user }) => {
  const { groupedSongs, groupBy } = useMusic();

  return (
    <div className="mt-6">
      {Object.entries(groupedSongs).map(([group, songs]) => (
        <div key={group} className="mb-6">
          {groupBy && (
            <h2 className="text-lg font-semibold text-black-600 my-3">
              {group}
            </h2>
          )}
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {songs.map((song) => (
              <SongItem key={song.id} song={song} user={user} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SongList;
