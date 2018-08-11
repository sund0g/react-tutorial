import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {   // Setting the default state inline because not using a constructor.
                                                                // Action is whatever action we want to perform on state.
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    };
});

console.log(store.getState());

//
// Redux action types
//

// Increment count object
store.dispatch({
    type: 'INCREMENT'   // Uppercase is the recommended Redux notation for action type names.
                        // multiple words are '_' separated.
                        // NOTE: 'type' is the minimal thing provided to all actions.
});

store.dispatch({
    type: 'INCREMENT'
});

// Reset count object
store.dispatch({
    type: 'RESET'
});

// Decrement count object
store.dispatch({
    type: 'DECREMENT'
});

console.log(store.getState());
