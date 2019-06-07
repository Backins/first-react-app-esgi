import React from 'react';
import { red } from 'ansi-colors';

class TodoForm extends React.Component {
    state = {
        text: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onNew(this.state);

        return false;
    }
    
    render(){
        const {onComplete, onDelete} = this.props;

        return <form onSubmit={this.handleSubmit}>
            <input 
                value={this.state.text} 
                onChange={
                    (event) => this.setState({
                        text: event.currentTarget.value
                    })
                }/>
            <button type="submit">Valider</button>
        </form>
        ;
    }
}

export default TodoForm;