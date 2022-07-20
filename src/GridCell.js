import React from "react";
import "./GridCell.css";
import { serialize } from "./Serialize";
import { duplicates } from "./Duplicates";
import { arrayAlreadyHasArray } from "./CheckArray";

const GridCell = (props) => {
    const n = props.n;
    const puzzle = props.puzzle;
    var mat = serialize(n, puzzle);
    const idx = duplicates(n, puzzle, mat);
    const i = props.i;
    const j = props.j;

    mat = mat[n*i+j];
    
    return (
        <div className="matrix">
            <table>
                <tbody>
                    {mat.slice(0, n).map((val, idx1) => {
                        return (
                        <tr key={idx}>
                            {val.slice(0,n).map((val1, idx2) => {
                            return <td key={[idx1,idx2]} className={(arrayAlreadyHasArray(idx[0], [n*i+idx1,j*n+idx2]) ? " row_dupl" : "")+(arrayAlreadyHasArray(idx[1], [n*i+idx1,j*n+idx2]) ? " col_dupl" : "")+(arrayAlreadyHasArray(idx[2], [n*i+idx1,j*n+idx2]) ? " grid_dupl" : "")} >{val1}</td>;
                            })}
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default GridCell;