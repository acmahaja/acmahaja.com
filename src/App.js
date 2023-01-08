import ConstructionWorker from "./assets/Construction Worker.svg";
import "./App.css";

import { AiFillGithub } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <section>
        <div className="text">
          <h6>Hi, my name is ...</h6>
          <h1>Anjaney C Mahajan</h1>
          <h6>
            I am overhauling my personal website, track my progress here on <span>  Github <AiFillGithub size={20} />
            </span>
          </h6>
        </div>
        <img
          src={ConstructionWorker}
          className="App-logo"
          alt="Construction Worker"
        />
      </section>
    </div>
  );
}

export default App;
