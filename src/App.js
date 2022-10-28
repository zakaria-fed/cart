import { Component } from "react";
import Laptop from "./Components/Laptop";
import Navbar from "./Components/Navbar";
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";

class App extends Component {
  state = {
    laptops: [
      { id: 1, name: "PC Portable Gamer HP Victus", price: 15000, img: img1 },
      { id: 2, name: "PC Portable Work Asus", price: 10000, img: img2 },
      { id: 3, name: "Mac Air", price: 20000, img: img3 },
      { id: 4, name: "PC Portable HP XJ554", price: 6000, img: img4 },
      { id: 5, name: "PC Portable Lenovo 6A5", price: 8000, img: img5 },
    ],
    cart: [],
    total: 0,
  };

  btnClicked = (id) => {
    if (this.state.cart.filter((lap) => lap.id === id).length === 1) {
      let copy = [...this.state.cart];
      copy.forEach((lap) => {
        if (lap.id === id) {
          lap.qty++;
          lap.subTotal = lap.subTotal + lap.price;
          this.setState((prev) => ({
            laptops: [...prev.laptops],
            cart: [...prev.cart],
            total: prev.total + lap.price,
          }));
        }
      });
    } else {
      let copyLaptops = [...this.state.laptops];
      let laptopData;
      copyLaptops.forEach((lap) => {
        if (lap.id === id) {
          laptopData = lap;
        }
      });

      this.setState((prevState) => ({
        laptops: [...prevState.laptops],
        cart: [
          ...prevState.cart,
          {
            id: id,
            qty: 1,
            subTotal: laptopData.price,
            price: laptopData.price,
            name: laptopData.name
          },
        ],
      }));

      this.setState((prev) => ({
        laptops: [...prev.laptops],
        cart: [...prev.cart],
        total: prev.total + laptopData.price,
      }));
    }
  };

  render() {
    return (
      <div className="App position-relative">
        <Navbar
          cartLaptops={this.state.cart}
          total={this.state.total}
          leng={this.state.cart.length}
        />
        <div className="container d-flex gap-3 flex-wrap justify-content-center">
          {this.state.laptops.map((lap) => (
            <Laptop handleCartClick={this.btnClicked} key={lap.id} data={lap} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
