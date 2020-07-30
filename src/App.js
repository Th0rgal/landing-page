import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <header>
            <img src="./images/small_logo.svg" width="200" alt="logo" />
            <div>
              <ul>
                <li><a>HOME</a></li>
                <li><a>LITEPAPER</a></li>
                <li><a href="https://github.com/cashplace">CODE</a></li>
                <li><a>MATRIX</a></li>
              </ul>
            </div>
          </header>
        </section>

        <section id="main">
          <div className="main-text">
            <span>cash.place</span> <br /> A safe place to <br />
            spend your digital cash.
          </div>

          <img src="./images/full_logo.svg" width="520" alt="leaf-main-image" />
        </section>
      </div>
    );
  }
}

export default App;
