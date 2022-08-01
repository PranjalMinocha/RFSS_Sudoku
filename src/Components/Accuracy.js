export function calcAccuracy (n,idx) {
    var seen = [];
    for(let i =0; i<3; i++) {
        seen.push.apply(idx[i])
    }
    const uniqueChars = [...new Set(seen)];
    const l = uniqueChars.length;
    const m = n*n*n*n;
    return(100*(m-l)/m);
}