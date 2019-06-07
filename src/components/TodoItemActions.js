import React from 'react';

const TodoItemActions = ({onDelete, onComplete}) => <> 
    <a onClick={onDelete}>Delete</a>
    <a onClick={onComplete}>Set Complete</a>
</>;

export default TodoItemActions;