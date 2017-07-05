import React from 'react';
import _ from 'lodash';
import TodosListHeader from './TodosListHeader';
import TodosListItem from './TodosListItem';

class TodosList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'todo');

    return _.map(this.props.todos, (todo, index) =>
      <TodosListItem key={index} {...todo} {...props} />)
  }

  render () {
    return (
      <table>
        <TodosListHeader />
        <tbody>
          {
            this.renderItems()
          }
        </tbody>
      </table>
    );
  }
}


export default TodosList;