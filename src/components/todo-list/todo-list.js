import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todoItemsList, delFunc, importantFunc, doneFunc }) => {

  let react_elements_list = todoItemsList.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
            {...itemProps }
            delFunc={() => delFunc(id)}
            importantFunc={() => importantFunc(id)}
            doneFunc={() => doneFunc(id)} />
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
