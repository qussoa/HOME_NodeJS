import React, { Component } from "react";
import "../bucket/css/BucketListItem.css"

class BucketListItem extends Component {
  state = {
    isEditing: false,
    b_target: ""
  };

  inputClick = ev => {
    ev.stopPropagation();
  };

  toggleEdit = () => {
    const { isEditing } = this.state;
    this.setState({
      isEditing: !isEditing
    });
  };

  editInput = ev => {
    this.setState({
      ...this.state,
      b_target: ev.target.value
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { bucket } = this.props;
    if (!prevState.isEditing && this.state.isEditing) {
      this.setState({
        b_target: bucket.b_target
      });
    }
  }

  updatehandle = () => {
    const { bucket, bucket_main_url } = this.props;
    const data = { _id: bucket._id, b_target: this.state.b_target };
    fetch(bucket_main_url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  };

  updateCheckhandle = ev => {
    const { bucket, bucket_main_url } = this.props;
    const data = { _id: bucket._id };
    fetch(bucket_main_url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    ev.stopPropagation();
  };

  deletehandle = ev => {
    if (window.confirm("없애도 되겠어?")) {
      const { bucket, bucket_main_url } = this.props;
      const data = { _id: bucket._id };
      fetch(bucket_main_url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    }
    ev.stopPropagation();
  };
  render() {
    const { bucket } = this.props;
    return (
      <tr data-id={bucket._id} onClick={this.toggleEdit}>
        <td>
          <input type="checkbox" onClick={this.updateCheckhandle} />
        </td>
        <td>{bucket.b_startDate}</td>
        <td>
          {this.state.isEditing ? (
            <div>
              <input
                value={this.state.b_target}
                onClick={this.inputClick}
                onChange={this.editInput}
                className="handle-input"
              />
              <button type="button" onClick={this.updatehandle} className="btn-confirm">
              
              </button>
            </div>
          ) : (
            <span>{bucket.b_target}</span>
          )}
        </td>

        <td>{bucket.b_goalDate}</td>
        <td>
          <button type="button" onClick={this.deletehandle} className="btn-del">
          </button>
        </td>
      </tr>
    );
  }
}

export default BucketListItem;
