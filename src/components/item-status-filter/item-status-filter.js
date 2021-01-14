import React, {Component} from 'react';

import './item-status-filter.css';


export default class ItemStatusFilter extends Component {

    buttons = [
        {filterName: 'all', label: 'All'},
        {filterName: 'active', label: 'Active'},
        {filterName: 'done', label: 'Done'},
    ];

    render() {
        let { filter, showFilteredFunc } = this.props;

        let react_elements_list = this.buttons.map((item) => {
            let { filterName, label } = item;
            let itemIsActive = filterName === filter;
            let className = itemIsActive ? "btn btn-info" : "btn btn-outline-secondary";

            return (
                <button type="button"
                        key={filterName}
                        className={className}
                        onClick={ () => showFilteredFunc(filterName) } >
                    {label}
                </button>
            );
        });

        return (
            <div className="btn-group">
                {react_elements_list}
            </div>
        );
    }
}
