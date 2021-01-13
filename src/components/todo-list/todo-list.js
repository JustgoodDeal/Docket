import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todoItems }) => {

  let react_elements_list = todoItems.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps } />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { react_elements_list }
    </ul>
  );
};

export default TodoList;
