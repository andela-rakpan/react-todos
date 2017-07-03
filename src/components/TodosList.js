import React from 'react';
import _ from 'lodash';
import TodosListHeaer from './TodosListHeader';
import TodosListItem from './TodosListItem';

class TodosList extends React.Component {
  renderItems() {
    return _.map(this.props.todos, (todo, index) =>
      <TodosListItem key={index} {...todo} />)
  }

  render () {
    return (
      <table style={{margin: "0 auto"}}>
        <TodosListHeaer />
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