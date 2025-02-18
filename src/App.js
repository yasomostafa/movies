import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import FetchPosts from './components/FetchPosts';
import FetchOnClick from './components/FetchOnClick';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/list" element={<MovieList />} />
          <Route path="/add" element={<AddMovie />} />
          <Route path="/post" element={<FetchPosts />} />
          <Route path="/click" element={<FetchOnClick />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
