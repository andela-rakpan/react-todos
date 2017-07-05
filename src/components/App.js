import React from 'react';
import _ from 'lodash';
import CreateTodo from './CreateTodo';
import TodosList from './TodosList';

// Mock data for todos appliction
const todos = [
  {
    task: 'Learn react',
    isCompleted: false
  },
  {
    task: 'Watch Champions League final',
    isCompleted: true
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);

    //Application state
    this.state = {
      todos,
    }
  }

  // createTask
  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false
    });

    this.setState({ todos: this.state.todos });
  }

  // toggleTask
  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task)
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });
  }

  // saveTask
  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask)
    foundTodo.task = newTask
    this.setState({ todos: this.state.todos });
  }

  // deleteTask
  deleteTask(task) {
    _.remove(this.state.todos, todo => todo.task === task)
    this.setState({ todos: this.state.todos });
  }

  render () {
    return (
      <div>
          <h1> Todos App </h1>
          <CreateTodo
            createTask={this.createTask.bind(this)}
          />
          <TodosList
            todos={this.state.todos}
            toggleTask={this.toggleTask.bind(this)}
            saveTask={this.saveTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)}
          />
      </div>
    );
  }
}


export default App;
