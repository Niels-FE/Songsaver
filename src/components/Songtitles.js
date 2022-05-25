import React from "react";

export const Songtitles = () => {
    return (
        <div
            className="grid grid-cols-5">

            <span className="text-center bg-green-400 font-bold">Title</span>
            <span className="text-center bg-green-400 font-bold">Artist</span>
            <span className="text-center bg-green-400 font-bold">Genre</span>
            <span className="text-center bg-green-400 font-bold">Rating</span>
            <span className="text-center bg-green-400 font-bold">Remove?</span>
        </div>
    )
}