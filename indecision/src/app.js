// Stateless functional component

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []})); // Implicitly returning options.
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option) // Implicit return
        }));

    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];

        alert(option);
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add option';
        } else if (this.state.options.indexOf(option) > -1) { // -1 because indexOf is 0-based
            return 'This option already exists';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        })); // Implicit return.
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
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
        );
    }
}

const Header = (props) => { // Was a class; converted to stateless component
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

const Action = (props) => { // Was a class; converted to stateless component
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => { // Was a class; converted to stateless component
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove all</button>
            {
                props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}

const Option = (props) => { // Was a class; converted to stateless component
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                remove
            </button>
        </div>
    );
};

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault(); //Don't want to reload entire page; only what has changed.

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error})); // Implicit return
//            return { error };   // If what we're returning and the variable name are the same
                                // we don't have to use e.g. error: error.
    }

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
