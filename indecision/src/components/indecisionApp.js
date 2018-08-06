import React from 'react';
import AddOption from './AddOption.js'; // Remember, default exports are not in {}.
import Header from './Header'; // Don't have to use .js extension.
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

// Pull state out of constructor
// Convert all 4 event handlers to class properties (arrow functions)
// Delete the constructor
// Start with clas properties and end with methods

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({options: []})); // Implicitly returning options.
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option) // Implicit return
        }));

    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];

        this.setState(() => ({
            selectedOption: option
        }));
    };

    handleAddOption = (option) => {
        if(!option) {
            return 'Enter valid value to add option';
        } else if (this.state.options.indexOf(option) > -1) { // -1 because indexOf is 0-based
            return 'This option already exists';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        })); // Implicit return.
    };

    // Create event handler that clears selectedOption state.
    // Pass that into OptionModal
    // Call it on button click

    handleClearSelectedOption = () => {
      this.setState(() => ({ selectedOption: undefined }));
    }

// Lifecycle methods are only available to class components.

    componentDidMount() {  // Fires when the component gets mounted to the DOM.
        try { // Add for edge case where options data is invalid, e.g. '[12}'
            const json = localStorage.getItem('options');
            const options = JSON.parse(json); // Convert options back to an object we can then use to set state.

            if (options) { // Add for edge case when nothing is in options.
                this.setState(() => ({ options}));
            }
        } catch(e) {
            //Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) { // Fires after state or props change.
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options); // Convert options to a string so we can save in localStorage.
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() { //Fires when a component goes away. Rarely used. Most often with multiple web pages.
        console.log('component will unmount!');
    }

// End of lifecycle methods.

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}
