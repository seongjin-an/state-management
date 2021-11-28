import {combineReducers, configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterStore'
const rootReducer = combineReducers({
    counter: counterReducer
});
export type RootState = ReturnType<typeof rootReducer>
export default configureStore({
    reducer: rootReducer,
})