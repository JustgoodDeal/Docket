import React, {Component} from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        label: ''
    };

    onSearchChange = (event) => {
        let label = event.target.value;
        this.setState({
            label
        });
        this.props.showSearchedFunc(label);
    };

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   onChange={this.onSearchChange}
                   value={ this.state.label }
                   placeholder="type to search" />
        );
    }
}
