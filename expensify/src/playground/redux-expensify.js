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

// Edit expense action generator
const editExpense = (id, updates) => ({ // don't need defaults here as we have to have something to edit.
    type: 'EDIT_EXPENSE',
    id,
    updates,
});

// Set text filter action generator
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text,
});

// Sort by date action generator
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

// Sort by amount action generator
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

// Set start date action generator
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate,
});

// Set end date action generator
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate,
});

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
            // Remember .filter does not change state, it returns a new array with the filtered subset.
            return state.filter(({ id }) => id !== action.id);// if the id passed in does not match the action id keep it, else remove it.
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return { //using object spread operator
                        ...expense,
                        ...action.updates,
                    };
                } else {
                    return expense; // Couldn't find an expense that matched action.id passed in.
                };
            });
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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text,
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount',
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date',
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate,
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate,
            };
        default:
            return state;
    };
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        // A lot of fn chaining crap going on here...
        // Basically whay we're saying is, if the lower case expense description matches
        // matches the deconstructed text (also lower cased), then set textMatch = true.
        // Boolean is what the equation right of = returns.
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        // IFF all 3 are true, return the expense object as part of the filtered array.
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
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
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// Start making changes to the store

// .dispatch returns the action object so we can capture the information in a variable.
// This enables us to use things like the uuid to manipulate the expenses.
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// Challenge: remove expenseOne
// step 1: create call to store to remove expense
// step 2: create removeExpense action generator
// step 3: add REMOVE_EXPENSE to expenseReducer

//store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// Playing aroung with spreading objects

//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 })); // can send in multiple updates.

// Challenge: update filters by changing the text property.

//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter(''));

// Challenge: finish up the filters reducer.

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(0)); // 125 is just a placeholder
//store.dispatch(setStartDate()); // resetting to default
//store.dispatch(setEndDate(999)); // 42 is just a placeholder

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
