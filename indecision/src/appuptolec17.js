console.log('app.js is running!');

// JSX - Javascript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['one', 'two']
};

const template = (
    <div>
        <h1>{app.title && app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

/*
const user = {
    name: 'Scott',
    age: 17,
    location: 'Moon'
};

function getLocation(location){

    if(location){
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name.toUpperCase() : 'Anonymous'}</h1>
        {(user.age  && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);
*/

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp(); //re-render the page for each update.
    console.log('addOne');
};

const subtractOne = () => {
    count--;
    renderCounterApp(); //re-render the page for each update.
    console.log('subtractOne');
};

const reset = () => {
    console.log('reset');
    count = 0;
    renderCounterApp(); //re-render the page for each update.
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={subtractOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp(); // render page the first time.
