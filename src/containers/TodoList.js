import React from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { toggleTodo, filters } from '../actions';


const TodoList = (props) => {
    return (
        <ul>
            {props.todos.map((todo) => {
                return <Todo key={todo.id} text={todo.text} onClick={() => { props.toggleTodo(todo.id) }} completed={todo.completed} />
            })}
        </ul>
    )
}

const getVisibleTodo = (todos, filter) => {
    switch (filter) {
        case filters.SHOW_ALL:
            return todos;
        case filters.SHOW_COMPLETED:
            return todos.filter((todo) => (todo.completed));
        case filters.SHOW_ACTIVE:
            return todos.filter((todo) => (!todo.completed));
    }
}

const mapStateToProps = (state) => ({
    todos: getVisibleTodo(state.todos, state.filter)
})

export default connect(mapStateToProps, { toggleTodo })(TodoList);