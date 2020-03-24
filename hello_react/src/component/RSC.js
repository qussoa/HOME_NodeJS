import React from "react";
import RSC_SUB from "./RSC_SUB";
/*
    함수형 컴포넌트 생성
    const RSC = function(){}
    함수형 컴퍼넌트는 2014버전에서부터 사용가능

    App.js > RCC.js > RSC.js > RCC_SUB.jsx

    RCC_SUB 컴퍼넌트에서 name 변수에 값을 담아서 전달하기
    <COM 변수="값"/> 형식
*/
const RSC = () => {
  return (
    <div>
      <div>두번째 함수형 컴포넌트</div>
      <RSC_SUB name="홍길동" />
    </div>
  );
};

export default RSC;
