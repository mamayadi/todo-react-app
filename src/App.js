import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

export default class App extends Component {
  state = {
    todos: [
      { id: 1, title: 'First todo', completed: false },
      { id: 2, title: 'Second todo', completed: true },
      { id: 3, title: 'Third todo', completed: false }
    ]
  };
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}
