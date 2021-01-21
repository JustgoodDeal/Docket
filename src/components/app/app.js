import React, {Component} from 'react';

import AppHeader from '../app-header';
import ItemAddForm from '../item-add-form';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';


export default class App extends Component {
    startId = 1;

    state = {
        todoItemsList: [
            this.createItem('drink'),
            this.createItem('eat'),
            this.createItem('sleep'),
        ],
        searchLabel: '',
        filter: 'all',
    };

    createItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.startId++
        }
    }

    findIndexById(list, id) {
        return list.findIndex((el) => el.id === id)
    }

    toggleProperty(arr, id, propName) {
        let ind = this.findIndexById(arr, id);
        let arrCopied = arr.slice(0);
        arrCopied[ind][propName] = !arrCopied[ind][propName];
        return arrCopied
    }

    deleteItem = (id) => {
        this.setState( ({ todoItemsList }) => {
            let ind = this.findIndexById(todoItemsList, id);
            return {
                todoItemsList: [...todoItemsList.slice(0, ind), ...todoItemsList.slice(ind + 1)]
            }
        });
    };

    addItem = (label) => {
        let item = this.createItem(label);

        this.setState( ({ todoItemsList }) => {
            let todoItemsListCopied = todoItemsList.slice(0);
            todoItemsListCopied.push(item);

            return {
                todoItemsList: todoItemsListCopied
            }
        });
    };

    onToggleImportant = (id) => {
        this.setState( ({ todoItemsList }) => {
            return {
                todoItemsList: this.toggleProperty(todoItemsList, id, 'important')
            }
        });
    };

    onToggleDone = (id) => {
        this.setState( ({ todoItemsList }) => {
            return {
                todoItemsList: this.toggleProperty(todoItemsList, id, 'done')
            }
        });
    };

    showSearchedItems = (label) => {
        this.setState( () => {
            return {
                searchLabel: label,
            }
        });
    };

    showFilteredItems = (filter) => {
        this.setState( () => {
            return { filter }
        });
    };

    render() {
        let { todoItemsList, searchLabel, filter } = this.state;

        let doneCount = todoItemsList.filter((el) => el.done === true).length;
        let toDoCount = todoItemsList.length - doneCount;

        let visibleItems = todoItemsList.filter((el) => el.label.toLowerCase().includes(searchLabel.toLowerCase()));
        if (filter === 'active') {
            visibleItems = visibleItems.filter((el) => !el.done)
        } else if (filter === 'done') {
            visibleItems = visibleItems.filter((el) => el.done)
        }

        return (
            <div className="todo-app">
                <AppHeader toDo={toDoCount} already_done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel
                        showSearchedFunc={ this.showSearchedItems }/>
                    <ItemStatusFilter
                        filter={filter}
                        showFilteredFunc={ this.showFilteredItems } />
                </div>
                <TodoList
                    todoItemsList={ visibleItems }
                    delFunc={ this.deleteItem }
                    importantFunc={ this.onToggleImportant }
                    doneFunc={ this.onToggleDone } />
                < ItemAddForm
                    addFunc={ this.addItem } />
            </div>
        );
    }
}
