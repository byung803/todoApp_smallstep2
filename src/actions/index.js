import database from '../firebase/firebase'

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})


export const startAddTodo = (text = "") => {
    return (dispatch) => {
        console.log(dispatch);
        return database.ref('todos').push(text).then((ref) => {
            dispatch(addTodo(text));
        });
    };
};

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const filters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

export const setTodos = (todos) => ({
    type: 'SET_TODOS',
    todos
})


export const startSetTodos = () => {
    return (dispatch) => {
        return database.ref('todos').once('value').then((snapshot) => {
            const todos = [];

            snapshot.forEach((childSnapshot) => {
                todos.push({
                    id: childSnapshot.key,
                    text: childSnapshot.val()
                });
            });

            dispatch(setTodos(todos));
        });
    };
};