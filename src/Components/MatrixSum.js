export function matrixSum(n, mat) {
    var sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++){
            sum += parseInt(mat[i][j])
        };
      };
    return (sum);
}