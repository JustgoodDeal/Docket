import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const todoItemsMap = [
    {label: 'drink', important: true, id: 1},
    {label: 'eat', important: false, id: 2},
    {label: 'sleep', important: true, id: 3},
];

const App = () => {
    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            <TodoList todoItems={todoItemsMap} />
        </div>
    );
};

export default App;
