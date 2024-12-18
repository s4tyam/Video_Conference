import {Routes, Route} from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import RoomPage from "./pages/RoomPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<HomePage />}/>
        <Route path="/room/:id" element = {<RoomPage />} />
      </Routes>
    </div>
  );
}

export default App;
