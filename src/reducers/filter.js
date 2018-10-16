import { filters } from '../actions';

const filter = (state = filters.SHOW_ALL, action) => {
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return state;
    }
}

export default filter;