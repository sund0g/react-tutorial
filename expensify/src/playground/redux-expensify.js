import { createStore, combineReducers } from 'redux';

// Expenses reducer

const expensesReducerDefaultState = []; // the default state will be an empty array, i.e no expenses.

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    };
};

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'Date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    };
};

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer, // setting expenses to be managed by the expenses reducer.
        filters: filtersReducer // setting filters to be managed by the filters reducer.
    })
);

console.log(store.getState());

const demoState = { // This is all the data we want to track
    expenses: [{    // expenses is an array of objects
        id: 'asdasdasda',
        description: 'January rent',
        note: 'this was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {  // these are things we want the user to be able to apply, e.g. sort by date.
        text: 'rent',
        sortBy: 'amount', // can be date or amount
        startDate: undefined,
        endDate: undefined
    }
};
