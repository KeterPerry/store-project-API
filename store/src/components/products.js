import React, { Component } from "react";
import foodArr from "../api";
import ProductDetails from "./productDetails";

export default class Products extends Component {
  state = {
    food: [],
    inputItem: "",
    inputImage: "",
    inputPrice: "",
  };

  componentDidMount = async () => {
    try {
      const { data } = await foodArr.get("/");
      this.setState({ food: data }, () => console.log(this.state.food));
    } catch (e) {
      console.log(e.message);
    }
  };
  handleInput = ({ target }) => {
    this.setState({ [target.id]: target.value }, () =>
      console.log(this.state.inputUpdate1)
    );
  };

  ///read
  insertData = () => {
    return this.state.food.map((item) => {
      return (
        <ProductDetails
          key={item.id}
          name={item.item}
          image={item.image}
          price={item.price}
          id={item.id}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
          inputUpdate1={this.state.inputUpdate1}
          inputUpdate2={this.state.inputUpdate2}
          handleConfirm={this.handleConfirm}
        />
      );
    });
  };
  //create

  handleCreate = async () => {
    const newItem = {
      item: this.state.inputItem,
      image: this.state.inputImage,
      price: this.state.inputPrice,
    };
    try {
      const data = await foodArr.post("/", newItem);
      console.log(data.data);

      this.setState((prevState) => {
        return {
          food: [...prevState.food, data.data],
          inputItem: "",
          inputImage: "",
          inputPrice: "",
        };
      });
    } catch (err) {
      console.error(err.message);
    }
  };
  /////delete
  handleDelete = async (id) => {
    try {
      const itemToBeDeleted = await foodArr.delete(`/${id}`);
      console.log(itemToBeDeleted.data);

      this.setState((prevState) => {
        const filtered = prevState.food.filter((item) => item.id !== id);
        return { food: filtered };
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  /////update
  //   handleUpdate = (id) => {
  //     // this.setState({ isSpinning: true });
  //
  //   };

  handleConfirm = async (id, newItem, newPrice) => {
    const itemToUpdate = this.state.food.find((item) => item.id === id);
    // console.log(itemToUpdate);
    const updatedItem = { ...itemToUpdate, item: newItem, price: newPrice };
    console.log(updatedItem);
    const { data } = await foodArr.put(`/${id}`, updatedItem);
    console.log(data);

    this.setState((prev) => {
      return {
        food: prev.food.map((item) => {
          if (item.id === id) {
            return data;
          }
          return item;
        }),
        // isSpinning: false,
      };
    });
  };

  //////////////////////////////////////////////////////

  //   handleUpdate = async (id, newName) => {

  //     const personToUpdate = this.state.peopleArr.find(
  //       (person) => person.id === id
  //     );
  //     const updatedPerson = { ...personToUpdate, name: newName };
  //     const { data } = await axios.put(
  //       `https://628e25fba339dfef87a87ada.mockapi.io/people/${id}`,
  //       updatedPerson
  //     );
  //     this.setState((prev) => {
  //       return {
  //         peopleArr: prev.peopleArr.map((person) => {
  //           if (person.id === id) {
  //             return data;
  //           }
  //           return person;
  //         }),

  //////////////////////////////

  render() {
    return (
      <div className="products-container">
        <div className="fields">
          <input
            id="inputItem"
            placeholder="item"
            onChange={this.handleInput}
            value={this.state.inputItem}
          ></input>
          <input
            id="inputImage"
            placeholder="image"
            onChange={this.handleInput}
            value={this.state.inputImage}
          ></input>
          <input
            id="inputPrice"
            placeholder="price"
            onChange={this.handleInput}
            value={this.state.inputPrice}
          ></input>
          <button onClick={this.handleCreate}>Add</button>
        </div>
        <br></br>
        <div className="item-wrapper">{this.insertData()}</div>
      </div>
    );
  }
}
