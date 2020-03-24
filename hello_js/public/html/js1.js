console.log("나는 자바스크립트 입니다");

var std = { name: "홍길동", age: 30, tel: "1234" };

var arrNumber = [1, 2, 3, 4, 5];
//var arrString = ["홍길동", "이몽룡", "성춘향", "장보고"];

// console.log(값, 값, 값) : 각각의 값들을 형변환 하지 말고
// 있는 그대로 콘솔에 출력하라
console.log("객체 : ", std);
console.log("숫자 : ", arrNumber);
console.log("문자 : ", arrString);

// 객체 요소 중 일부를 변경하고자 할때
var std = { ...std, age: 100 };
console.log("객체 std : ", std);

var sum = 0;
/*
    forEach문은 배열을 한개씩 순회하면서
    요소들을 callback 함수에 전달하여 코드를 수행한다
    forEach를 이용하여 요소를 연산한 후
    forEach가 끝난 후 값을 조회하면
    forEach의 순회에서 계산된 결과가 정확히 
    조회된다는 보장이 없다
    forEach는 비동기 방식이기 때문에
*/
arrNumber.forEach(function(item) {
  sum += item;
});

for (let i = 0; i < arrNumber.length; i++) {
  sum += arrNumber[i];
}

console.log("합계 : ", sum);

/*
 배열을 순회하면서
 각 요소를 callback함수에 전달하고
 callvack 함수가 return 하는 값들을 모아서
 다른 배열로 생성
 */
const arrNumber2 = arrNumber.map(num => {
  return num;
});

console.log("원래 배열 : ", arrNumber);
console.log("map 이후 배열 : ", arrNumber2);

var arrString = ["홍길동", "이몽룡", "성춘향", "장보고"];
var arrString2 = arrString.find(item => item === "성춘향");
console.log("성춘향 : " + arrString2);

var arrString3 = arrString.find(item => {
  return item === "장영실";
});
console.log("장영실 : " + arrString3);
