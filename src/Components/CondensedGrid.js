import React from "react";
import "./CondensedGrid.css";
import GridCell from "./GridCell";
import { serialize } from "./Serialize";
import { matrixSum } from "./MatrixSum";

const CondensedGrid = (props) => {
    const puzzle = props.puzzle;
    const n = props.n;
    const mats = serialize(n, puzzle);

    return (
        <div className="ui container">
        <table className="table">
            <tbody>
            {puzzle.slice(0, n).map((rand, i) => {
                return (
                <tr key={i}>
                    {rand.slice(0,n).map((rand, j) => {
                    return <td key={[i,j]} className={(i+j)%2===0 ? "green grow" : "white grow"}>
                        <div className="thumb">{matrixSum(n, mats[n*i+j])}</div>
                        <div className="hide"><GridCell n={n} puzzle={puzzle} i={i} j={j} /></div>
                    </td>;
                    })}
                </tr>
                );
            })}
            </tbody>
        </table>
        <h4>Hover over the blocks to view sudoku grid</h4>
        </div>
    )
}

export default CondensedGrid;