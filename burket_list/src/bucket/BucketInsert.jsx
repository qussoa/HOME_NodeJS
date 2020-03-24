import React, { Component } from "react";
import axios from "axios";
import "../bucket/css/BucketInsert.css";

class BucketInsert extends Component {
  state = {
    b_target: ""
  };

  handleChange = e => {
    this.setState({ ...this.state, b_target: e.target.value });
  };

  bucketAxiosSubmit = ev => {
    ev.preventDefault();
    const { bucket_insert_url } = this.props;
    axios
      .post(bucket_insert_url, { b_target: this.state.b_target })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  bucketInsertSubmit = ev => {
    ev.preventDefault();
    const { bucket_insert_url } = this.props;
    // let data = new FormData();
    // data.append("b_target", this.state.b_target);
    fetch(bucket_insert_url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        b_target: this.state.b_target
      })
    });
  };
  render() {
    return (
      <form onSubmit={this.bucketInsertSubmit}>
        <div className="input_div">
          <input
            value={this.state.b_target}
            onChange={this.handleChange}
            className="input-box"
          />
          <button type="submit" className="btn_save"></button>
        </div>
      </form>
    );
  }
}

export default BucketInsert;
