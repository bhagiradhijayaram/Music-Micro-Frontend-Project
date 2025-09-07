import { MusicProvider } from "./context/MusicContext";
import SongList from "./components/SongList";
import SongFilter from "./components/SongFilter";

const App = ({ user }) => {
  console.log(user);
  return (
    <MusicProvider>
      <section className="flex flex-col justify-center items-center px-4">
        <section className="w-full max-w-7xl my-8 ">
          <section className="bg-blue-300 flex flex-col justify-center items-center py-18 rounded-xl space-y-3 text-white text-center px-4">
            <h2 className="font-bold text-4xl">Your Music Library</h2>
            <p className="text-xl">
              Discover, organize, and enjoy your favorite tracks
            </p>
          </section>
          <SongFilter user={user} />
          <SongList user={user} />
        </section>
      </section>
    </MusicProvider>
  );
};

export default App;
