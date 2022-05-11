import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import SongOverview from "./components/SongOverview";
import About from "./components/About";


const App = () => {
  return (
    <Router>
      <div>
      <Header/>
      <Routes>
          <Route index element={<SongOverview/>}/>
          <Route exact path="/about" element={<About />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;