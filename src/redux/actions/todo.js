export function fetchTodo() {
    return {
        type: "TODOS_RECEIVED",
        payload: {
            todos: [
                {text: 'Test'},
                {text: 'Test2', completed: true}
            ]
        }
    }
}