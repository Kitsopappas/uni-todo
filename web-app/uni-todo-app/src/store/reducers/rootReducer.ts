import { combineReducers } from '@reduxjs/toolkit';
import todoSlice from '../slices/todoSlice';

export default combineReducers({
    todoSlice,
});