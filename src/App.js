import React from "react";
import Header from "./Components/Header";
import PuzzleForm from "./Components/PuzzleForm";
import GridSelect from "./Components/GridSelect";
import ProgressGraph from "./Components/ProgressGraph";

function App() {
  // n = localStorage.getItem("n")
  const n = 3
  // puzzle = localStorage.getItem("puzzle")
  const puzzles = [[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]], [["8","7","6","5","4","1","9","3","2"], ["9","4","1","3","2","6","5","8","7"], ["5","2","3","7","9","8","4","6","1"], ["7","6","9","4","8","2","1","5","3"], ["1","8","5","9","3","7","2","4","2"], ["4","3","2","6","1","5","8","7","9"], ["3","9","8","6","6","4","7","1","5"], ["2","1","7","8","5","3","6","9","4"], ["6","5","4","1","7","9","3","2","8"]], [["8","7","6","5","4","1","9","3","2"], ["9","4","1","3","2","6","5","8","7"], ["5","2","3","7","9","8","4","6","1"], ["7","6","9","4","8","2","1","5","3"], ["1","8","5","9","3","7","2","4","2","6"], ["4","3","2","6","1","5","8","7","9"], ["3","9","8","6","6","4","7","1","5"], ["2","1","7","8","5","3","6","9","4"], ["6","5","4","1","7","9","3","2","8"]]];

  return (
    <div className="ui container">
      <Header />
      <PuzzleForm />
      <GridSelect n={n} puzzles={puzzles}/> 
      <ProgressGraph />
    </div>
  );
}

export default App;