import React from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
    componentDidMount() {
        setTimeout(() => this.props.loadTodos(), 2000);
    }

    render(){
        return <ul>
                {
                    this.props.todos.map(todo => <TodoItem 
                        key={todo.text} 
                        todo={todo}
                    />)
                }
            </ul>;
    }
}

export default TodoList;