import React from "react";
import { useUpdateAlbumMutation } from "../api/jsonServerApi";

const UpdateAlbumForm = (props) => {
  const { selectedAlbum = null, setSelectedAlbum } = props;
  const [UpdateAlbum, { isLoading }] = useUpdateAlbumMutation();

  const submitAlbum = (event) => {
    event.preventDefault();
    UpdateAlbum({ id: selectedAlbum.id, title: event.target["title"].value });
    event.target.reset();
    setSelectedAlbum(null);
  };

  return (
    <form onSubmit={(e) => submitAlbum(e)}>
      <h3>Update Album</h3>
      <div>
        {selectedAlbum
          ? `${selectedAlbum.id} - ${selectedAlbum.title}`
          : "No Selected Album"}
      </div>
      <div>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" />
      </div>
      <br />

      <input
        type="submit"
        value="Update Album"
        disabled={!selectedAlbum || isLoading}
      />
      {isLoading && "Loading..."}
    </form>
  );
};

export default UpdateAlbumForm;
