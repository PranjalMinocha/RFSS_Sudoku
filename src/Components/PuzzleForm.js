import React, {useState} from "react";

const PuzzleForm = () => {
    const [puzzleType, setPuzzleType] = useState("");
    const [file, setFile] = useState("");

    function onChangePuzzle(e) {
        setPuzzleType(e.target.value)
    }

    function onChangeFile(e) {
        setFile(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        localStorage.setItem('puzzleType',puzzleType);
        localStorage.setItem('file', file);
        // Need to add file scraping for n 
    }

    return(
        <div className="ui main">
            <h1>Select puzzle to solve</h1>
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Select type of puzzle</label>
                    <select name="puzzle" id="puzzle" onChange={onChangePuzzle}>
                        <option value="Sudoku">Sudoku</option>
                        <option value="Minesweeper" disabled>Minesweeper</option>
                        <option value="Others" disabled>Others</option>
                    </select>
                </div>
                <div className="field">
                    <label>Upload puzzle</label>
                    <input type="file" accept=".txt" id="upload" onChange={onChangeFile}/>
                </div>
                <button className="ui button blue">Solve</button>
            </form>
        </div>
    )
}

export default PuzzleForm;