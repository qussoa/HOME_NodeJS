// arr  배열의 각 요소 값을 개별 변수에 담아서
//
var arr = ["홍길동", "이몽룡", "성춘향", "라푼젤"];
var hong = arr[0];
var lee = arr[1];
var sung = arr[2];
var rha = arr[3];

const [hong, lee, sung, rha] = arr;

const my = { [name]: "홍길동" };
console.log(my.홍길동);
