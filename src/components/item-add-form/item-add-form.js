import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    callAddFunc = (event) => {
        event.preventDefault();
        if (this.state.label) {
            this.props.addFunc(this.state.label);
            this.setState({
                label: ''
            });
        }
    };

    render() {
        return (
            <form className="item-add-form d-flex justify-content-between"
                  onSubmit={ this.callAddFunc }>
                <input type="text"
                       className="form-control"
                       onChange={ this.onLabelChange }
                       placeholder="What needs to be done"
                       value={ this.state.label } />
                <button className="btn btn-outline-secondary">
                    Add item
                </button>
            </form>
        );
    }
};
