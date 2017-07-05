import React from 'react';

class TodosListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    }
  }

  // onEdit Click
  onEditClick() {
    this.setState({
      isEditing: true
    });
  }

  // onCancelClick
  onCancelClick() {
    this.setState({
      isEditing: false
    });
  }

  // onSaveClick 
  onSaveClick(event) {
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;

    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false });
  }

  // onDeleteClick
  onDeleteClick() {
    this.props.deleteTask(this.props.task);
  }

  // handleTaskClick
  handleTaskClick(task) {
    this.props.toggleTask(task);
  }

  // renderActionsSection
  renderActionsSection() {
    if(this.state.isEditing) {
      return (
        <td> 
          <button className="btn" onClick={this.onSaveClick.bind(this)}>Save</button>
          <button className="btn" onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }

    return (
      <td> 
        <button className="btn" onClick={this.onEditClick.bind(this)}>Edit</button>
        <button className="btn" onClick={this.onDeleteClick.bind(this)}>Delete</button>
      </td>
    );
  }

  // renderTaskSection
  renderTaskSection() {
    const { task, isCompleted } = this.props;
    const taskStyle = {
      color: isCompleted ? "green" : "red",
      cursor: "pointer"
    }

    if(this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <div className="input-field">
              <input type="text" defaultValue={task} ref="editInput" />
            </div>
          </form>
        </td>
      );
    }

    return (
      <td onClick={this.handleTaskClick.bind(this, task)} style={taskStyle}> {this.props.task} </td>
    );
  }

  render () {
    return (
      <tr>
        { this.renderTaskSection() }
        { this.renderActionsSection() }
      </tr>
    );
  }
}


export default TodosListItem;

