import React from 'react';
import _ from 'lodash';

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    }
  }

  renderError(){
    if(this.state.error) {
      return(
        <div style={{color: "red"}}> {this.state.error} </div>
      )
    }
  }

  // handleSubmit
  handleSubmit(event) {
    event.preventDefault();

    const task = this.refs.createInput.value;
    const validInput = this.validateInput(task);

    if(validInput) {
      this.setState({ error: validInput });
      return;
    }

    this.setState({ error: null })
    this.props.createTask(task);
    this.refs.createInput.value = "";
  }

  // validateInput
  validateInput(task) {
    if(!task) {
      return 'Please enter task to create!';
    } else if(_.find(this.props.todos, todo => todo.task === task)){
      return 'Task already exists';
    } else {
      return null;
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="row">
          <div className="col s10">
            <input type="text" placeholder="Add todo" ref="createInput"/>
          </div>
          <div className="col s2">
            <button className="btn-floating btn-large waves-effect waves-light red">
              <i className="material-icons">add</i>
            </button>
          </div>
        </div>
        {this.renderError()}
      </form>
    );
  }
}


export default CreateTodo;