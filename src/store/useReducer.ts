// userReducer.ts
interface UserState {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any; // Replace 'any' with the specific type of your user data if available
  loading: boolean;
  error: string | null;
}

interface UserAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any; // Replace 'any' with the specific type of your payload if available
}

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
      return action.payload; // Actualiza el estado con los nuevos datos del usuario
   
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
