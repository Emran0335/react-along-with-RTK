import { useState } from 'react';
import './App.css';
import Albums from './components/Albums';
import NewAlbumForm from './components/NewAlbumForm';
import UpdateAlbumForm from './components/UpdateAlbumForm';

function App() {
  const [selectedAlbum, setSelectedAlbum] = useState(null)
  return (
    <div className="App">
      <Albums setSelectedAlbum={setSelectedAlbum}/>
      <NewAlbumForm />
      <UpdateAlbumForm selectedAlbum={selectedAlbum} setSelectedAlbum={setSelectedAlbum}/>
    </div>
  );
}

export default App;
