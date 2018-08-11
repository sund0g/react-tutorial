import { createStore } from 'redux';

const store = createStore((state = { count:0 }) => { // Setting the default state inline because not using a constructor.
    return state;
});

console.log(store.getState());
