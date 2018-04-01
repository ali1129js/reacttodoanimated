/**
 * @Author: Ali Ismail
 * @Date:   2018-04-01T14:20:50+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-01T16:03:01+02:00
 */
import React, { Component } from 'react';
import TodoItems from "./TodoItems";
import "./TodoList.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }
    this._inputElement.value = "";
    console.log(this.state.items);
    e.preventDefault();
  }

  deleteItem(key) {
    var fitems = this.state.items;
    var filteredItems = fitems.filter(function (item) {
      return (item.key !== key);
    });
    this.setState({
      items: filteredItems
    });
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input  ref={(a) => this._inputElement = a}
              placeholder="enter Task"></input>
            <button type="submit">Add Task</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
        delete={this.deleteItem} />
      </div>
    );
  }
}

export default App;
