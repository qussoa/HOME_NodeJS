import React, { Component } from "react";

class PhoneList extends Component {
  render() {
    //phoneMain에서 보내준 모든 매개변수 중에서
    // phoneList를 추출 요청
    const { phoneList, name, tel, addr, my_value } = this.props;

    return (
      <div>
        <p>전화번호 리스트</p>
        <p>{name}</p>
        <p>{tel}</p>
        <p>{addr}</p>
        <p>List에서 my_value : {my_value}</p>
      </div>
    );
  }
}

export default PhoneList;
