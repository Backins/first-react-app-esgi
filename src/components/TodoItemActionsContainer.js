import React from 'react';
import TodoItemActions from './TodoItemActions';
import { connect } from 'react-redux';
import {deleteTodo, completeTodo} from '../redux/actions/todo';

const mapDispatchToProps = (dispatch, ownProps) => {
    const todo = ownProps.todo;
    return {
        onDelete: () => dispatch(deleteTodo(todo)),
        onComplete: () => dispatch(completeTodo(todo))
    }
}

export default connect(undefined, mapDispatchToProps)(TodoItemActions);