import React from 'react';

import './todo-list-item.css';


const TodoListItem = ({ label, delFunc, importantFunc, doneFunc, important, done }) => {
    let classNames = 'todo-list-item';

    if (important) {
        classNames += ' important'
    }

    if (done) {
        classNames += ' done'
    }

    return (
        <span className={classNames}>
          <span
              className="todo-list-item-label"
              onClick={ doneFunc } >
            {label}
          </span>
          <button type="button"
                  className="btn btn-outline-success btn-sm float-right"
                  onClick={ importantFunc } >
            <i className="fa fa-exclamation"/>
          </button>
          <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={ delFunc } >
            <i className="fa fa-trash-o"/>
          </button>
        </span>
        )
};

export default TodoListItem;
