import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {   // Setting the default state inline because not using a constructor.
                                                                // Action is whatever action we want to perform on state.
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy: 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1;
            return {
                count: state.count - decrementBy
            };
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    };
});

//
// Redux action types
//

// This method gets called each time the store changes. Used for dynamic updating.
// Setting up unsubscribe so we can unsubscribe as we desire later.
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// Increment count object
store.dispatch({
    type: 'INCREMENT',  // Uppercase is the recommended Redux notation for action type names.
                        // multiple words are '_' separated.
                        // NOTE: 'type' is the minimal thing provided to all actions.
        incrementBy: 5
});

// Call unsubscribe when the subscription is no longer needed.
// unsubscribe();

store.dispatch({
    type: 'INCREMENT',
});

// Reset count object
store.dispatch({
    type: 'RESET'
});

// Decrement count object
store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'SET',
    count: 101
});
