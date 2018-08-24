import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Add expense action generator

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt,
    }
});

// Remove expense action generator

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// Set text filter action generator

// Sort by date action generator

// Sort by amount action generator

// Set start date action generator

// Set end date action generator


// Expenses reducer

const expensesReducerDefaultState = []; // the default state will be an empty array, i.e no expenses.

//
// what we mean by not changing state:
//
// const names = ['a', 'b'];
// names.push('c') changes names to ['a','b','c']
// names.concat('d') returns names with 'd' added, but does not change the array.
//
// Using the "spread" operator [...] allows for more complex operations,
//  [...names, 'd'] acts the same way as concat. See its use in expenseReducer below.

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense,
            ];
        case 'REMOVE_EXPENSE':
            // remember .filter does not change state, it returns a new array with the filtered subset.
            return state.filter(({ id }) => id !== action.id // if the id passed in does not match the action id keep it, else remove it.
            );
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
        filters: filtersReducer // setting filters to be managed by the filters reducer.REDU
    })
);

// subscribe to the store

store.subscribe(() => {
    console.log(store.getState());
});

// Start making changes to the store

// .dispatch returns the action object so we can capture the information in a variable.
// This enables us to use things like the uuid to manipulate the expenses.
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

// Challenge: remove expenseOne
// step 1: create call to store to remove expense
// step 2: create removeExpense action generator
// step 3: add REMOVE_EXPENSE to expenseReducer

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

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