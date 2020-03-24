// 지금부터 이 문서는 React의 컴퍼넌트
import React, { Component } from "react";
import "./RCC.css";
import RCC_SUB from "./RCC_SUB";

/*
    ES6의 class 문법으로 컴포넌트 생성
    // 오류가 생겼을 시
    class RCP extends React Component {
    

    보통 jsx(js) 파일의 형식으로 저장
    가급적 파일의 첫글자, 클래스의 첫글자는 대문자
    파일이름과 클래스 이름을 일치
    react에서는 "" 권장
    문법의 마지막 ;

    클래스는 1개의 파일에 1개만 작성가능
*/
class RCC extends Component {
  render() {
    return (
      <div>
        <div className="myDiv">첫번째 RCC 컴포넌트</div>
        <RCC_SUB name="이몽룡" />
      </div>
    );
  }
}

// 이 컴퍼넌트를 외부에서 사용할 수 있도록 선언
// export default는 한 파일에 한개만 존재하기 때문
export default RCC;
