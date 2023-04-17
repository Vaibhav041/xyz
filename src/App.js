import "./App.css";
import Navbar from "./components/Navbar";
import line from './images/Line.svg'
import { ReactSVG } from 'react-svg'
import Ecosystem from "./components/Ecosystem";

function App() {
  return (
    <>
      <div className="bg-gray-400 h-screen">
        <Navbar />
        <div className="w-full h-[90vh] flex flex-col items-center mt-24  font-bold text-6xl relative">
          <p>Trusted Market</p>
          <ReactSVG className="absolute top-14 left-[35%]" src={line}/>
          <div className="flex items-baseline"><p>Research & Insights </p> <div className=" w-3 h-3 bg-[#FF0101] rounded-full"> </div></div>
        </div>
      </div>
      <Ecosystem/>
    </>
  );
}

export default App;
