import { Link } from "react-router-dom";
import songsData from "../../data/songs.json";

export const SongList = () => {
  const songs = songsData.songs;

  const title = "Rolling Sones 500 Greatest songs of all time";

  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {songs.map((song) => {
          console.log(encodeURI(song.title));
          return (
            <li key={song.rank}>
              {/* "Like a Rolling Stone" -> like%20a%20rolling%20stone */}
              <Link
                to={`/song/${encodeURI(song.title)
                  .toLowerCase()
                  .replace(/'/g, "%27")}`}
              >
                {song.title} - {song.artist}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
