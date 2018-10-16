import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends React.Component {
    state = {
        value: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.value);
        this.setState({ value: '' });
    }

    handleInput = (e) => {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                >
                    <input onChange={this.handleInput} value={this.state.value} />
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        );
    }
}

export default connect(null, { addTodo })(AddTodo);