let max = 0;
exports.maximum = (arr) => {

    let resultProc = {};
    arr.forEach(value => resultProc[value] = resultProc[value] + 1 || 1);
    for (let i in resultProc) if (resultProc[i] > max) max = resultProc[i];
    return (max);



};