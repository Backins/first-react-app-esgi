import React from 'react';
import TodoForm from './TodoForm';
import { connect } from 'react-redux';
import {newTodo} from '../redux/actions/todo';

const mapDispatchToProps = (dispatch) => {
    return {
        onNew: (todo) => dispatch(newTodo(todo))
    }
}

export default connect(undefined, mapDispatchToProps)(TodoForm);