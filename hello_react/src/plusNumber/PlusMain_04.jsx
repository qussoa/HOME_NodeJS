import React from "react";
import { useState } from "react";

/**
 *  state와 이벤트 핸들러를 하나로 묶어 처리하는 방식
 */
const PlusMain_04 = () => {
  // [변수명, 이벤트핸들러] = useStete(0) : 숫자형 초기화
  // [변수명, 이벤트핸들러] = useStete("") : 문자형 초기화
  // 이벤트핸들러는 carmelCase로 작성
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>카운트 {count}</h1>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
    </div>
  );
};

export default PlusMain_04;
