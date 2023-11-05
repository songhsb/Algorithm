function solution(array) {
    let answer = 0;
    let arr = [];
    
    const obj = array.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});

    const maxVal = Math.max(...Object.values(obj));

    for (let key in obj) {
        if (obj[key] === maxVal) {
            arr.push(Number(key))
        }
    }

    return answer = arr.length > 1 ? -1 : arr[0];
}