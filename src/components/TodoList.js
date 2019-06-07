import React from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

class TodoList extends React.Component {
    state = {
        todos: [
            {
                text: "test"
            },
            {
                text: "test54546",
                completed: true
            }
        ]
    }

    handleComplete = (todo) => {
        this.setState({
            todos: this.state.todos.map(item => {
                if(item.text === todo.text) {
                    item.completed = !item.completed;
                }
                return item;
            })
        });
    }

    handleDelete = (todo) => {
        this.setState({
            todos: this.state.todos.filter(item => todo.text !== item.text)
        });
    }

    handleNew = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        });
    }

    render(){
        return <>
            <TodoForm onNew={this.handleNew}/>
            <ul>
                {
                    this.state.todos.map(todo => <TodoItem 
                        key={todo.text} 
                        todo={todo}
                        onComplete={this.handleComplete}
                        onDelete={this.handleDelete}
                    />)
                }
            </ul>
        </>;
    }
}

export default TodoList;