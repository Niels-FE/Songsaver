import React from "react";
import { useDispatch } from 'react-redux';
import { add } from "../redux/reducers/songReducer";

const AddSongContainer = () => {
    const dispatch = useDispatch();

    const handleForm = (e) => {
        e.preventDefault();
        const form = document.getElementById("songForm");
        const formData = new FormData(form);
        const allData = {
            name: formData.get('name'),
            artist: formData.get('artist'),
            genre: formData.get('genre'),
            rating: formData.get('rating'),
        }
        dispatch(add(allData))
    }

    return (
        <form
            id="songForm"
            className="max-w-6xl mx-auto my-2 bg-blue-100 p-2 flex w-full"
            onSubmit={(e) => { handleForm(e) }}>
            <input
                type="text"
                id="name"
                name="name"
                className="mx-2 w-full"
                placeholder="Add a songtitle"
                required>
            </input>
            <input
                type="text"
                id="artist"
                name="artist"
                className="mx-2 w-full"
                placeholder="Add a artist"
                required>
            </input>
            <select
                className="mx-2 w-full"
                defaultValue="choose a genre"
                name="genre"
                required>
                <option
                    disabled
                    value="choose a genre"
                >choose a genre</option>
                <option value="Rock">Rock</option>
                <option value="Jazz">Jazz</option>
                <option value="Pop">Pop</option>
            </select>
            <select
                className="mx-2 w-full"
                defaultValue="choose rating"
                name="rating"
                required>
                <option disabled value="choose rating">choose rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button
                className="w-full mx-2 bg-red-500 text-white"
                type="submit">Add song</button>

        </form>
    )
}
export default AddSongContainer;