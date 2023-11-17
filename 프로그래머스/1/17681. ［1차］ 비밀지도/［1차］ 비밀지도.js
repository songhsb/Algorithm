function solution(n, arr1, arr2) {
    let answer = [];
    let arr3 = [];
    // .toStriing(2) 2진수로 .toString(3) 3진수로
    // .padStart(n, '0') 문자열의 길이가 n보다 짧으면 앞에 '0'을 추가
    for (i=0; i<n; i++) {
        arr3[i] = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');
    }
    answer = arr3.map(item=>item.replaceAll('1', '#').replaceAll('0', ' '))
    return answer;
}