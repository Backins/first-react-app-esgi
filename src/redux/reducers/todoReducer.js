const todoReducer = (state = {
    todos: []
}, action) => {
    switch(action.type) {
        case 'TODOS_RECEIVED':
            return {
                ...state,
                todos: action.payload.todos
            }
        default:
            return state;
    }
}

export default todoReducer;