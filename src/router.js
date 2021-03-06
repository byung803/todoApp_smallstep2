import React, { Component } from 'react';

import AddTodo from './containers/AddTodo';
import TodoList from './containers/TodoList';
import Footer from './containers/Footer';

class Router extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <TodoList />
                <Footer />
            </div>
        );
    }
}

export default Router; 
