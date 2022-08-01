import React from "react";
import FullGrid from "./FullGrid";
import CondensedGrid from "./CondensedGrid";
import "./GridSelect.css"

const GridSelect = (props) => {
  const [status, setStatus] = React.useState(0)
  const puzzle = props.puzzles[1]
  const radioHandler = (status) => {
    setStatus(status);
  };

  return (
    <div className="ui container">
      <div className="left">
        <input type="radio" name="release" defaultChecked={status === 0} onClick={(e) => radioHandler(0)} className="ui radio checkbox"/>
        <label>See full sudoku grid</label>
        <br /><br/>
        <input type="radio" name="release" defaultChecked={status === 1} onClick={(e) => radioHandler(1)} className="ui radio checkbox"/>
        <label className="ui text">See condensed sudoku grid</label>
      </div>
      <div className="right">
        <div style={{display: status === 0 ? 'block' : 'none'}}><FullGrid n={props.n} puzzle={puzzle}/></div>
        <div style={{display: status === 1 ? 'block' : 'none'}}><CondensedGrid n={props.n} puzzle={puzzle}/></div>
      </div>
    </div>
  );
}

export default GridSelect;