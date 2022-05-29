import React, { Component } from "react";

export default class ProductDetails extends Component {
  state = { inputUpdate1: "", inputUpdate2: "", isDisplay: false };

  handleInput = ({ target }) => {
    this.setState({ [target.id]: target.value }, () =>
      console.log(this.state.inputUpdate1)
    );
  };

  handleUpdateClick = () => {
    this.setState({ isDisplay: true });
    // this.setState({ inputUpdate1: "", inputUpdate2: "" });
  };
  handleConfirm = () => {
    this.props.handleConfirm(
      this.props.id,
      this.state.inputUpdate1,
      this.state.inputUpdate2
    );
    //   this.setState({ value: '' });
  };

  render() {
    return (
      <div className="itemContainer">
        <div>
          <div>{this.props.name}</div>
          <div>`${this.props.price}`</div>
          <img alt="#" src={this.props.image}></img>
        </div>
        <br></br>
        <button onClick={() => this.props.handleDelete(this.props.id)}>
          Delete
        </button>
        <button onClick={this.handleUpdateClick}>Update</button>

        {this.state.isDisplay && (
          <h3 className="popup">
            {" "}
            please insert new details:
            <input
              placeholder="name"
              id="inputUpdate1"
              value={this.state.inputUpdate1}
              onChange={this.handleInput}
            ></input>
            <input
              placeholder="price"
              id="inputUpdate2"
              value={this.state.inputUpdate2}
              onChange={this.handleInput}
            ></input>
            <button onClick={this.handleConfirm}>Confirm</button>
          </h3>
        )}
      </div>
    );
  }
}
