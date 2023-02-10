import React from "react";
import { useCreateAlbumMutation } from "../api/jsonServerApi";

const NewAlbumForm = () => {
  const [createAlbum, { isLoading }] = useCreateAlbumMutation();

  function submitAlbum(event) {
    event.preventDefault();
    createAlbum(event.target["title"].value);
    event.target.reset();
  }

  return (
    <form onSubmit={(e) => submitAlbum(e)}>
      <h3>New Album</h3>
      <div>
        <label htmlFor="title">Title : </label>
        <input type="text" id="title" />
        <br />
        <br />
        <div>
          <input type="submit" value="Add New Album" disabled={isLoading} />
        </div>
      </div>
      {isLoading && "Loading..."}
    </form>
  );
};

export default NewAlbumForm;
