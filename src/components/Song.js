import React from "react";
import { useDispatch } from 'react-redux';
import { remove } from "../redux/reducers/songReducer";

export const Song = ({ id, name, artist, genre, rating }) => {
    const dispatch = useDispatch();

    return (
        <div
            data-id={id}
            className="grid grid-cols-5">

            <span className="text-center bg-green-100">{name}</span>
            <span className="text-center bg-green-100">{artist}</span>
            <span className="text-center bg-green-100">{genre}</span>
            <span className="text-center bg-green-100">{rating}</span>
            <button
                onClick={() => { dispatch(remove(id)) }}
                className="text-center bg-green-100 text-red flex items-center justify-center ">
                <svg className="pointer-events-none" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="#ff0000" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
            </button>
        </div>
    )
}

