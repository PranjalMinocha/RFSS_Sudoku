export function duplicates(n, puzzle, mat) {
    var row_idx = [];
    var col_idx = [];
    for(let i=0; i<n*n; i++) {
        var row_seen = {};
        var col_seen = {};
        for(let j=0; j<n*n; j++) {
            if(row_seen[puzzle[i][j]]) {
                
                row_idx.push([i,j]);
                row_idx.push([i,row_seen[puzzle[i][j]]]);
            }
            else {
                row_seen[puzzle[i][j]] = j;
            }

            if(col_seen[puzzle[j][i]]) {
                col_idx.push([j,i]);
                col_idx.push([col_seen[puzzle[j][i]],i]);
            }
            else {
                col_seen[puzzle[j][i]] = j;
            }
        };
    };

    var grid_idx = [];
    for(let i=0; i<n*n; i++) {
        var grid_seen = {};
        const itr = mat[i];
        for(let j=0; j<n; j++) {
            for(let k=0; k<n; k++) {
                if(grid_seen[itr[j][k]]) {
                    grid_idx.push([j+(~~(i/n))*n, k+n*(i%n)]);
                    grid_idx.push([grid_seen[itr[j][k]][0]+(~~(i/n))*n, grid_seen[itr[j][k]][1]+n*(i%n)]);
                }
                else {
                    grid_seen[itr[j][k]] = [j,k]
                }
            }
        }
    };
    return [row_idx, col_idx, grid_idx];
}