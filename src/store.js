import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';


//El store recibe el estado de reducers y lo pasa a la vista (en este caso la vista es App.js)
const store = createStore(
    reducer,
    compose( applyMiddleware(thunk),

        typeof window === 'object' &&
        typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store; //hacia  App.js, es decir hacia la vista