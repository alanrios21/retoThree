import axios from 'axios';
import store from './store';
import { createUserRequest, createUserSuccess, createUserFailure, updateUser, resetUser } from './userReducer';
import { ThunkAction } from 'redux-thunk';
import { RootState } from './store';
import { AnyAction } from '@reduxjs/toolkit';

interface UserData {
  username: string;
  email: string;
  password: string;
}

export type AppDispatch = typeof store.dispatch;

export const createUser = (userData: UserData) => async (dispatch: AppDispatch) => {
  dispatch(createUserRequest());
  
  try {
    const response = await axios.post('https://api-node-3hz8.onrender.com/register', userData);
    dispatch(createUserSuccess(response.data));
    dispatch(resetUser());
  } catch (error) {
    dispatch(createUserFailure('Error creating user'));
    console.log(error);
  }
};

export const getLastUser = (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
  dispatch(createUserRequest());

  try {
    const response = await axios.get('https://api-node-3hz8.onrender.com/getLastUser');
    
    dispatch(createUserSuccess(response.data));
  } catch (error) {
    dispatch(createUserFailure('Error fetching last user'));
    console.error('Error fetching last user:', error);
  }
};

export { updateUser };
