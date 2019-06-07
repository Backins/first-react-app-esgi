import React from 'react';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import {fetchTodo} from '../redux/actions/todo';

const mapStateToProps = (state) => {
    return {
        todos: state.todoReducer.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadTodos: () => dispatch(fetchTodo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);