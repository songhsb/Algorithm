function solution(arr, divisor) {
    var answer = [];
    for(num of arr) {
        if(num%divisor === 0) {
            answer.push(num);
        }
    }
    console.log('answer =>', answer);
    return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1]
}