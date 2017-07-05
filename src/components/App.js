import React from 'react';
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

    this.setState({
      todos: this.state.todos
    });
  }

  render () {
    return (
      <div>
          <h1> React Todos App </h1>
          <CreateTodo createTask={this.createTask.bind(this)} />
          <TodosList todos={this.state.todos} />
      </div>
    );
  }
}


export default App;
