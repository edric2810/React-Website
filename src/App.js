import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import { YoutubeData } from "./YoutubeData";
import Toggle from "./components/state/Toggle";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact Component={Home} />
          </Routes>
        </Router>
      </div>
      {/* Rendering list */}
      <div className="youtube-list">
        {YoutubeData.map((item, index) => {
          let image = "";
          image = `${item.image}${item.id}`;
          return (
            <YoutubeItem
              key={item.id}
              image={image}
              avatar={item.avatar}
              title={item.title}
              author={item.author}
            />
          );
        })}
      </div>
    </div>
  );
}

function YoutubeItem(props) {
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>

      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />

        <div className="youtube-info">
          <h3 className="youtube-title">{props.title || "SuperCar"}</h3>
          <h4 className="youtube-author">{props.author || "Ha Huu Hung"}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
