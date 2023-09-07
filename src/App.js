// import logo from './logo.svg';
import './App.css';
import NewNotes from './components/NewNotes';
import Notes from './components/Notes';
import Layout from './layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/> }>
            <Route index element={<Notes/>} />
            <Route path="new-notes" element={<NewNotes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
