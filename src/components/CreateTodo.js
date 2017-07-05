import React from 'react';

class CreateTodo extends React.Component {
  // handleSubmit
  handleSubmit(event) {
    event.preventDefault();
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = "";
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Add todo" ref="createInput"/>
        <button> Create </button>
      </form>
    );
  }
}


export default CreateTodo;