import React, {useState} from "react";
import GridSelect from "./GridSelect";

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

const PuzzleSelect = (props) => {
    const puzzles = props.puzzles;
    const [grid, setGrid] = useState([]);
    const [gen, setGen] = useState(0);

    return (
        <>
        
        </>
    );
}

export default PuzzleSelect;