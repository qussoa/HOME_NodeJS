import React, { useState } from "react";

/*
    useState
    React 16.8.x이후에 사용가능한 객체이며
    Hooks 기능을 도입한 React엔진에 장착되어 있고
    함수형 component state형 변수를 사용할 수 있다
    props  변수는 읽기 전용인데
    내부에서 어떤 변화된 값들을 처리하고자 할 떄
    state 변수를 사용
    초기의 함수형 component에서는 state형 변수를 사용할 수 없었음

*/
const PlusMain_03 = () => {
  //useState()
  // 함수형 component에서 state형 변수를 선언하고
  // 초기화를 수행하는 method
  // 변수형이 [변수명, 함수형] 형식의 배열로 생성
  const [message, setMessage] = useState("");

  const onInput = () => setMessage("어서오시오");
  const onOutput = () => setMessage("안녕히가시오");

  return (
    <div>
      <button onClick={onInput}>입장</button>
      <button onClick={onOutput}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default PlusMain_03;
