interface UserState {
  user: any; 
  loading: boolean;
  error: string | null;
}

interface UserAction {
  type: string;
  payload?: any; 
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
      return action.payload; 
   
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
