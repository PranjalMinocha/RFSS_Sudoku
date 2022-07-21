import React from "react";
import "./FullGrid.css";
import { serialize } from "./Serialize";
import { duplicates } from "./Duplicates";
import { arrayAlreadyHasArray } from "./CheckArray";


const FullGrid = (props) => {
    const puzzle = props.puzzle;
    const n = props.n;
    const mat = serialize(n, puzzle);

    const idx = duplicates(n, puzzle, mat);
    return (
        <div className="ui container">
            <table className="table">
                <tbody>
                    {puzzle.map((rand, i) => {
                        return (
                        <tr key={i}>
                            {rand.map((val, j) => {
                            return <td className={((~~(i/n)+~~(j/n))%2 === 0 ? "green data" : "white data")+(arrayAlreadyHasArray(idx[0], [i,j]) ? " row_dupl" : "")+(arrayAlreadyHasArray(idx[1], [i,j]) ? " col_dupl" : "")+(arrayAlreadyHasArray(idx[2], [i,j]) ? " grid_dupl" : "")} key={[i,j]}>
                                {val}
                            </td>;
                            })}
                        </tr>
                        );
                    })}
                </tbody>
            </table>
            <h4>Full sudoku grid</h4>
        </div>
    );
}

export default FullGrid;