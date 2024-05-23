interface User {
  // Define las propiedades de un usuario
}

interface UserState {
  user: User | null; 
  loading: boolean;
  error: string | null;
}

interface CreateUserRequestAction {
  type: 'CREATE_USER_REQUEST';
}

interface UpdateUserAction {
  type: 'UPDATE_USER';
  payload: User;
}

interface CreateUserSuccessAction {
  type: 'CREATE_USER_SUCCESS';
  payload: User;
}

interface CreateUserFailureAction {
  type: 'CREATE_USER_FAILURE';
  payload: string;
}

type UserAction = 
  | CreateUserRequestAction
  | UpdateUserAction
  | CreateUserSuccessAction
  | CreateUserFailureAction;

const initialState: UserState = {
  user: null,
  loading: false,
  error: null
};

const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case 'CREATE_USER_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload
      }; 
    case 'CREATE_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null
      };
    case 'CREATE_USER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
