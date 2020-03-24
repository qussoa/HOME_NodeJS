import React, { Component } from "react";
//import PropTypes from "prop-types";
import PhoneInsert from "./PhoneInsert";
import PhoneList from "./PhoneList";

class PhoneMain extends Component {
  id = 2;
  state = {
    phoneList: [
      { id: 0, name: "나", phone: "" },
      { id: 1, name: "반쪽", phone: "" }
    ]
  };

  state = {
    my_value: ""
  };

  //   componentWillMount() {}
  //   componentDidMount() {}
  //   componentWillReceiveProps(nextProps) {}
  //   shouldComponentUpdate(nextProps, nextState) {}
  //   componentWillUpdate(nextProps, nextState) {}
  //   componentDidUpdate(prevProps, prevState) {}
  //   componentWillUnmount() {}
  my_value_change = my_value => {
    this.setState({ my_value: this.my_value_change });
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <h2>my phone book</h2>
        </header>
        <section>
          <PhoneInsert
            my_value={this.state.my_value}
            my_value_change={this.my_value_change}
          />
          <PhoneList
            phoneList={this.state.phoneList}
            my_value={this.state.my_value}
            name="홍길동"
            tel="1234"
            addr="서울특별시"
          />
        </section>
      </React.Fragment>
    );
  }
}

//PhoneMain.propTypes = {};

export default PhoneMain;
