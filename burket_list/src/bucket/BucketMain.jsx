import React, { Component } from "react";
import BucketList from "./BucketList";
import "../bucket/css/BucketMain.css";
import BucketInsert from "./BucketInsert";

const BUCKET_MAIN_URL = "http://localhost:5000/bucket";
const BUCKET_INSERT_URL = "http://localhost:5000/bucket/insert";

class BucketMain extends Component {
  timer = "";
  state = {
    isFetch: false,
    bucketList: []
  };

  componentDidMount() {
    this.fetchBucketList();
    this.timer = setInterval(() => this.fetchBucketList(), 5000);
  }
  componentWillUnmount() {
    this.timer = null;
  }
  fetchBucketList = () => {
    this.setState({ ...this.state, isFetch: true });
    fetch(BUCKET_MAIN_URL)
      .then(response => {
        // alert(response);
        return response.json();
      })
      .then(result => {
        // console.log(result);
        this.setState({
          bucketList: result,
          isFetch: false
        });
      })
      .catch(error => console.log(error));
  };
  render() {
    return (
      <div>
        <header>
          <h2>안녕 2020</h2>
          <p>올해 가기 전에 꼭 하고 싶은 것들</p>
        </header>
        <section>
          <p className="info_p">
            {this.state.isFetch ? "읽어오고 있어요" : "받아왔어요"}
          </p>
          <BucketInsert bucket_insert_url={BUCKET_INSERT_URL} />
          <BucketList
            bucketList={this.state.bucketList}
            bucket_main_url={BUCKET_MAIN_URL}
          />
        </section>
      </div>
    );
  }
}

export default BucketMain;
