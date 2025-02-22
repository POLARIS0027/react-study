import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './root-reducer';
import { thunk } from 'redux-thunk';

const middleWares = [process.env.NODE_ENV === 'development' && logger, thunk].filter(
    Boolean
);


const persistConfig = {
    key: 'root',
    storage, // redux-persist의 stroage를 넣어야 함.
    whitelist: ['cart'],
}


const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);