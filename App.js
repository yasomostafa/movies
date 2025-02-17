import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/list" element={<MovieList />} />
           <Route path="/add" element={<AddMovie />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;