import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import SayHelloReducer from './reducers/SayHelloReducer';
import HomeworkReducer from './reducers/HomeworkReducer';

const reducer = {
    SayHelloReducer: SayHelloReducer,
    HomeworkReducer: HomeworkReducer
}

export default configureStore({
    reducer: reducer,
    middleware: (getDeafaultMiddleware)=> getDeafaultMiddleware().concat(logger),
})