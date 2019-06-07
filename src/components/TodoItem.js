import React from 'react';
import TodoItemActions from './TodoItemActions';

class TodoItem extends React.Component {
    render(){
        return <li style={{
            opacity: this.props.todo.completed ? 0.5 : 1,
            backgroundColor:"red"
        }}>
            {this.props.todo.text}
            <TodoItemActions
                onComplete={() => this.props.onComplete(this.props.todo)}
                onDelete={() => this.props.onDelete(this.props.todo)}
            />
        </li>;
    }
}

export default TodoItem;