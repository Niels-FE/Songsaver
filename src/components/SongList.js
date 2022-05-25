import React from "react";
import { useSelector } from 'react-redux';
import { Songtitles } from "./Songtitles.js";
import { Song } from "./Song.js";

const SongList = () => {
    const currentSongs = useSelector(state => state.songs);
    return (
        <section
            className="max-w-6xl mx-auto">
            <Songtitles key={0} />
            {
                currentSongs.map(song => {
                    return <Song
                        key={song.id}
                        id={song.id}
                        name={song.name}
                        artist={song.artist}
                        genre={song.genre}
                        rating={song.rating}
                    />
                })
            }
        </section>
    )

}
export default SongList;