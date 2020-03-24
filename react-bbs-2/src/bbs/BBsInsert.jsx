import React, { Component } from "react";
import axios from "axios";

class BBsInsert extends Component {
  state = {
    b_title: ""
  };

  // 키보드로 입력박스에 문자를 입력하면
  // 그 문자를 b_title에 저장
  handleChange = e => {
    this.setState({ ...this.state, b_title: e.target.value });
  };

  bbsAxiosSubmit = ev => {
    // 기본 submit 이벤트 무력화
    ev.preventDefault();
    const { bbs_insert_url } = this.props;
    axios
      .post(bbs_insert_url, { b_title: this.state.b_title })
      .then(result => console.log(result))
      .catch(err => console.log(err));

    // 표준 js에서는 return false 마지막에 써주면 submit() 이벤트를
    // 중단할 수 있었는데
    // react에서는 return false가 아무런 효과를 내지 못한다
    //  return false;
  };

  bbsInsertSubmit = ev => {
    // 기본적으로 수행되는 이벤트를 하지말라
    // submit()을 수행하지 말라
    ev.preventDefault();

    const { bbs_insert_url } = this.props;
    let data = new FormData();
    data.append("b_title", this.state.b_title);
    fetch(bbs_insert_url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      /*
        JSON.stringify : JSON 객체를 Serialize된 문자열로 변환
        JSON.parse와 반대되는 개념
        // JSOn.parse : JSON 형태의 문자열로 (수신)된 값을 JSON 객체 변환
      */
      body: JSON.stringify({
        b_title: this.state.b_title
      })
      // body : data
    });
    //  return false;
  };

  render() {
    return (
      <form
        onSubmit={this.bbsInsertSubmit}
        className="w3-container w3-row-padding "
      >
        <div className="w3-col s9 w3-padding">
          <input
            value={this.state.b_title}
            onChange={this.handleChange}
            className="w3-input w3-border"
          />
        </div>
        <div className="w3-col s3 w3-padding">
          <button type="submit" className="w3-button w3-green">
            저장
          </button>
        </div>
      </form>
    );
  }
}

export default BBsInsert;
