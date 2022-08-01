export function serialize(n,puzzle) {
    const mat = [];
    for (let i = 0; i < n; i++) {
        const rows = puzzle.slice(n*i, n*i+n);
        for (let j = 0; j < n; j++){
            const itr = [];
            for (let k = 0; k < n; k++) {
                itr.push(rows[k].slice(n*j, n*j+n));
            }
            mat.push(itr);
        };
      };
    return (mat);
}