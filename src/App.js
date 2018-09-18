import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import BookList from "./containers/book-list";
import BookDetail from "./containers/book-detail";

class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
