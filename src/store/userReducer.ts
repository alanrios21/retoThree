import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserData {
  username: string;
  email: string;
}

interface UserState {
  user: UserData | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    createUserSuccess(state, action: PayloadAction<UserData>) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    createUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    loginUserRequest(state) {
      state.loading = true;
      state.error = null;
    },
    loginUserSuccess(state, action: PayloadAction<UserData>) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    loginUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    updateUser(state, action: PayloadAction<UserData>) {
      state.user = action.payload;
    },
    resetUser(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  createUserRequest,
  createUserSuccess,
  createUserFailure,
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
  updateUser,
  resetUser,
} = userSlice.actions;

export default userSlice.reducer;


   

