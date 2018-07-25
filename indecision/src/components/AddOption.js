import React from 'react';

export default class AddOption extends React.Component { // can set up default class like this, but not with other objects.

    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault(); //Don't want to reload entire page; only what has changed.

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error})); // Implicit return
//            return { error };   // If what we're returning and the variable name are the same
                                // we don't have to use e.g. error: error.

        if(!error) { // Clear the value in the listbox if no error.
            e.target.elements.option.value = '';
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                  <input type="text" name="option" />
                  <button>Add Option</button>
                </form>
            </div>
        );
    }
}
