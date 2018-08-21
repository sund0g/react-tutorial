//
// the main purpose of this lesson is to show how to make one thing, (the action generators)
// a bit more complex so we can make multiple calls to them very simply.
// Subsequent lessons will move the action generators into their own files, but this lesson
// is to show a successful Redux application in a single file.
//

import { createStore } from 'redux';

//
// Action generators - functions that action objects
//

//
// This is partial destructuring. Commenting out to further destructure immediately below.
//
/*
const incrementCount = ({ incrementBy } = {}) => ({
    type: 'INCREMENT',
    // Check to see if incrementBy is being passed in, if yes, (?) then increment payload.incrementBy
    // by the number, else (:) default to incrementing by 1.
    incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
});
*/
const incrementCount = ({ incrementBy = 1 } = {}) => ({ // if incrementBy doesn't exist, set to 1
    type: 'INCREMENT',
    // Check to see if incrementBy is being passed in, if yes, (?) then increment payload.incrementBy
    // by the number, else (:) default to incrementing by 1.
    incrementBy //can do this because the object property equals the variable name.
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({ // Don't need to pass anything in because always resetting to 0
    type: 'RESET',
});

const setCount = ({ count } = {}) => ({ // No need for default value because it's required below
    type: 'SET',
    count
});

const store = createStore((state = { count: 0 }, action) => {   // Setting the default state inline because not using a constructor.
                                                                // Action is whatever action we want to perform on state.
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
// Using destructuring allows us to remove the following, and putting all the logic in
// const decrementCount() above.
//            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy: 1;
            return {
                count: state.count - action.decrementBy
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


// Increment count object. This is one way to do it. Commenting out inf favor of
// calling store.dispatch(incrementCount(...)); below.
/*
store.dispatch({
    type: 'INCREMENT',  // Uppercase is the recommended Redux notation for action type names.
                        // multiple words are '_' separated.
                        // NOTE: 'type' is the minimal thing provided to all actions.
        incrementBy: 5
});
*/
// Call unsubscribe when the subscription is no longer needed.
// unsubscribe();

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount({}));

// Challenge: convert RESET and SET to action generator functions.

// Reset count object
/*
store.dispatch({
    type: 'RESET'
});
*/

store.dispatch(resetCount());

// Decrement count object as an action generator function.
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

/*
store.dispatch({
    type: 'SET',
    count: 101
});
*/

store.dispatch(setCount({ count: -100 }));
