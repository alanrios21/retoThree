import axios from 'axios';
import { Dispatch } from 'redux';

interface UserData {
  nombre: string;
  email: string;
  password: string;
}

interface CreateUserRequestAction {
  type: 'CREATE_USER_REQUEST';
}

interface CreateUserSuccessAction {
  type: 'CREATE_USER_SUCCESS';
  payload: UserData; // El tipo de datos específico de la respuesta de datos
}

interface CreateUserFailureAction {
  type: 'CREATE_USER_FAILURE';
  payload: string;
}

interface UpdateUserAction {
  type: 'UPDATE_USER';
  payload: UserData; // Reemplaza 'UserData' con el tipo específico de tus datos de usuario
}

export const updateUser = (userData: UserData): UpdateUserAction => {
  return {
    type: 'UPDATE_USER',
    payload: userData,
  };
};

type UserActionTypes = CreateUserRequestAction | CreateUserSuccessAction | CreateUserFailureAction;

export const createUser = (userData: UserData) => {
  return (dispatch: Dispatch<UserActionTypes>) => {
    dispatch({ type: 'CREATE_USER_REQUEST' });

    axios.post('http://localhost:3001/usuarios', userData)
      .then(response => {
        dispatch({ type: 'CREATE_USER_SUCCESS', payload: userData }); 
      })
      .catch(error => {
        dispatch({ type: 'CREATE_USER_FAILURE', payload: error.message });
      });
  };
};
