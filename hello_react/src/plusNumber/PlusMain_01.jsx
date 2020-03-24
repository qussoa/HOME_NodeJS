import React from "react";

/**
 *  함수형 컴퍼넌트
 *  2014(React 16.x 이후)에서 도입된 문법
 *  React 16.x이후에서 Hooks라는 개념
 *
 *  장점 : 부모로부터 변수를 전달 받을때 함수의 매개변수처럼 받을 수 있음
 *
 *  함수에서 this 키워드
 *  일반 함수에서는 this 키워드가 함수 자체를 표현하는 객체
 *  화살표 함수에서는 this 키워드가 scope 자체가 부모를 가르키는 형태가 되어
 *  일부 함수내에서 사용할 때 주의를 해야하는 경우가 많다
 *
 *  부모로부터 변수를 전달받을 떄
 *  개별적으로 변수를 받을 수 있고 class에서 props에 담겨서 받는 것과 같은 원리로
 *  받을 수 있도록 되어있다
 */
const PlusMain = props => {
  return (
    <div>
      <h1>카운터</h1>
      <h3>{props.name}</h3>
      <button>Plus</button>
      <button>Minus</button>
    </div>
  );
};

export default PlusMain;
